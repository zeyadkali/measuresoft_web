import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { INITIAL_PRODUCTS, INITIAL_CATEGORIES, INITIAL_BRANDS } from './src/data/initialData';
import { Product, QuoteRequest } from './src/types';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  let products: Product[] = [...INITIAL_PRODUCTS];
  let quoteRequests: QuoteRequest[] = [
    {
      id: 'rfq-init-1',
      quoteNumber: 'MS-RFQ-2026-001',
      clientName: 'Eng. Tarek Hegazi',
      companyName: 'Petrobel (Belayim Petroleum Co.)',
      email: 'tarek.hegazi@petrobel.org',
      phone: '+20 100 488 2391',
      country: 'Egypt',
      rigOrProjectLocation: 'Sinai Field / Rig 24',
      urgency: 'immediate',
      additionalNotes: 'Urgent replacement needed for sour gas drilling section.',
      items: [
        {
          productId: 'ms-h2s-01',
          productName: 'MS-1000 Intrinsically Safe H2S Mud Sniffer',
          productCode: 'MS-H2S-01',
          quantity: 2,
          targetGas: 'H2S'
        }
      ],
      status: 'new',
      submittedAt: new Date(Date.now() - 86400000).toISOString()
    }
  ];

  app.get('/api/health', (req, res) => {
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'Measuresoft Egypt API Service',
      version: '2.4.0'
    });
  });

  app.get('/api/products', (req, res) => {
    const { category, brand, search } = req.query;
    let result = products;

    if (category && typeof category === 'string') {
      result = result.filter(p => p.categoryId === category);
    }
    if (brand && typeof brand === 'string') {
      result = result.filter(p => p.brandId === brand);
    }
    if (search && typeof search === 'string') {
      const q = search.toLowerCase();
      result = result.filter(
        p =>
          p.code.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.nameAr.includes(q) ||
          p.gasTargets.some(g => g.toLowerCase().includes(q))
      );
    }

    res.json(result);
  });

  app.get('/api/products/:idOrSlug', (req, res) => {
    const { idOrSlug } = req.params;
    const product = products.find(p => p.id === idOrSlug || p.slug === idOrSlug || p.code === idOrSlug);
    if (!product) {
      res.status(404).json({ error: 'Equipment not found in catalog' });
      return;
    }
    res.json(product);
  });

  app.post('/api/products', (req, res) => {
    const newProduct: Product = req.body;
    if (!newProduct.code || !newProduct.name) {
      res.status(400).json({ error: 'Code and name are required' });
      return;
    }
    products.unshift(newProduct);
    res.status(201).json(newProduct);
  });

  app.put('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(p => p.id === id);
    if (index === -1) {
      res.status(404).json({ error: 'Equipment not found' });
      return;
    }
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  });

  app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter(p => p.id !== id);
    res.json({ success: true, message: `Equipment ${id} deleted` });
  });

  app.get('/api/categories', (req, res) => {
    res.json(INITIAL_CATEGORIES);
  });

  app.get('/api/brands', (req, res) => {
    res.json(INITIAL_BRANDS);
  });

  app.get('/api/quotes', (req, res) => {
    res.json(quoteRequests);
  });

  app.post('/api/quotes', (req, res) => {
    const { clientName, companyName, email, phone, country, rigOrProjectLocation, urgency, additionalNotes, items } = req.body;

    if (!clientName || !companyName || !email || !phone) {
      res.status(400).json({ error: 'Missing mandatory client contact details' });
      return;
    }

    const year = new Date().getFullYear();
    const count = String(quoteRequests.length + 1).padStart(4, '0');
    const newQuote: QuoteRequest = {
      id: `rfq-${Date.now()}`,
      quoteNumber: `MS-RFQ-${year}-${count}`,
      clientName,
      companyName,
      email,
      phone,
      country: country || 'Egypt',
      rigOrProjectLocation: rigOrProjectLocation || '',
      urgency: urgency || 'immediate',
      additionalNotes: additionalNotes || '',
      items: items || [],
      status: 'new',
      submittedAt: new Date().toISOString()
    };

    quoteRequests.unshift(newQuote);
    res.status(201).json(newQuote);
  });

  app.patch('/api/quotes/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const quote = quoteRequests.find(q => q.id === id);
    if (!quote) {
      res.status(404).json({ error: 'Quotation request not found' });
      return;
    }

    quote.status = status;
    res.json(quote);
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Measuresoft API and Web Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
