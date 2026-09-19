import { Brand, Category, Subcategory, Product, BlogPost, Branch, JobOpening } from '../types';

export const INITIAL_BRANDS: Brand[] = [
  {
    id: 'measuresoft',
    name: 'Measuresoft Systems',
    origin: 'Egypt / UK',
    logo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80',
    description: 'Proprietary mud logging sensors and hazardous gas perimeter monitoring systems built for extreme desert and offshore oilfield environments.',
    descriptionAr: 'أنظمة قياس حفر متطورة ومجسات رصد الغازات الخطرة المصممة خصيصاً للبيئات الصحراوية والبحرية القاسية.'
  },
  {
    id: 'honeywell',
    name: 'Honeywell Analytics',
    origin: 'USA',
    logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80',
    description: 'Global industry standard in fixed flame, optical infrared, and toxic gas detection for refineries and drilling rigs.',
    descriptionAr: 'المعيار العالمي الأول في كواشف اللهب والغازات السامة والأشعة تحت الحمراء لمعامل التكرير ومنصات الحفر.'
  },
  {
    id: 'crowcon',
    name: 'Crowcon Detection Instruments',
    origin: 'United Kingdom',
    logo: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=300&q=80',
    description: 'Specialized portable and fixed gas detectors certified to ATEX Zone 0 for harsh drilling rig cellars and confined space entry.',
    descriptionAr: 'أجهزة كشف غازات محمولة وثابتة حاصلة على شهادات ATEX للمنطقة صفر في مواقع الحفر والأماكن المغلقة.'
  },
  {
    id: 'rae-systems',
    name: 'RAE Systems by Honeywell',
    origin: 'USA',
    logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80',
    description: 'Pioneers in Photoionization Detectors (PID) for volatile organic compounds and rapid wireless toxic gas area monitoring.',
    descriptionAr: 'رواد كواشف التأين الضوئي للمركبات العضوية المتطايرة وشبكات المراقبة اللاسلكية في الحقول النفطية.'
  },
  {
    id: 'det-tronics',
    name: 'Det-Tronics',
    origin: 'USA',
    logo: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=300&q=80',
    description: 'SIL-2 certified optical flame detectors and acoustic gas leak detectors for high-risk offshore production platforms.',
    descriptionAr: 'كواشف لهب بصرية وكواشف تسرب غاز صوتية معتمدة وفق معيار SIL-2 للمنصات البحرية عالية الخطورة.'
  }
];

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'gas-detection',
    slug: 'gas-detection',
    name: 'Gas Detection Systems',
    nameAr: 'أنظمة كشف الغازات الصناعية',
    description: 'ATEX & IECEx certified portable and fixed gas detection instruments engineered for hazardous drilling and refining zones.',
    descriptionAr: 'أجهزة كشف الغازات المحمولة والثابتة المعتمدة لمعايير ATEX و IECEx للبيئات القابلة للاشتعال وحقول الحفر.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mud-logging',
    slug: 'mud-logging',
    name: 'Mud Logging & Rig Instrumentation',
    nameAr: 'معدات تسجيل سائل الحفر وأجهزة البريمة',
    description: 'Pneumatic degassers, total hydrocarbon FID analyzers, standpipe sensors, and complete surface logging instrumentation.',
    descriptionAr: 'أجهزة استخلاص الغاز بالهواء المضغوط، ومحللات الهيدروكربونات الكلية، ومجسات ضغط ومستوى سوائل الحفر.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1516197155649-ca2ff10415a6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h2s-safety',
    slug: 'h2s-safety',
    name: 'H2S Safety & Rig Perimeter Protection',
    nameAr: 'معدات السلامة ورصد غاز كبريتيد الهيدروجين',
    description: 'Comprehensive sour gas safety packages, multi-channel wireless rig alert sirens, and positive pressure breathing gear.',
    descriptionAr: 'منظومات إنذار غاز H2S الشاملة، ومحطات المراقبة المحيطية اللاسلكية للبريمة وأجهزة التنفس الذاتي.',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'calibration-testing',
    slug: 'calibration-testing',
    name: 'Calibration Gas & Rig Testing Tools',
    nameAr: 'غازات المعايرة ومحطات الفحص الميداني',
    description: 'NIST-traceable span calibration gas mixtures, automatic bump test docks, and high-precision gas regulators.',
    descriptionAr: 'أسطوانات غاز المعايرة المعتمدة دولياً، ومحطات الاختبار الذاتي السريع لمنصات الحفر وورش الصيانة.',
    iconName: 'Gauge',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_SUBCATEGORIES: Subcategory[] = [
  { id: 'sub-fixed-gas', categoryId: 'gas-detection', slug: 'fixed-gas-detectors', name: 'Fixed Gas Detectors', nameAr: 'كواشف الغازات الثابتة' },
  { id: 'sub-portable-gas', categoryId: 'gas-detection', slug: 'portable-gas-detectors', name: 'Portable Multi-Gas Detectors', nameAr: 'كواشف الغازات المحمولة متعددة الغازات' },
  { id: 'sub-flame-detectors', categoryId: 'gas-detection', slug: 'optical-flame-detectors', name: 'Optical Flame & UV/IR Detectors', nameAr: 'كواشف اللهب البصرية UV/IR' },
  { id: 'sub-degassers', categoryId: 'mud-logging', slug: 'degassers-agitators', name: 'Pneumatic Degassers & Agitators', nameAr: 'مستخلصات الغاز الميكانيكية لسائل الحفر' },
  { id: 'sub-hydrocarbon-analyzers', categoryId: 'mud-logging', slug: 'hydrocarbon-analyzers', name: 'FID Total Hydrocarbon Analyzers', nameAr: 'محللات الهيدروكربونات الكلية بتقنية FID' },
  { id: 'sub-rig-sensors', categoryId: 'mud-logging', slug: 'rig-surface-sensors', name: 'Rig Surface Sensors & Transducers', nameAr: 'مجسات ومحولات أجهزة سطح البريمة' },
  { id: 'sub-h2s-wireless', categoryId: 'h2s-safety', slug: 'wireless-h2s-monitors', name: 'Wireless Rig Perimeter H2S Monitors', nameAr: 'محطات الرصد اللاسلكية لغاز H2S' },
  { id: 'sub-escape-scba', categoryId: 'h2s-safety', slug: 'scba-escape-sets', name: 'Emergency Escape Breathing Apparatus', nameAr: 'أجهزة التنفس الصناعي والهروب في الطوارئ' },
  { id: 'sub-cal-cylinders', categoryId: 'calibration-testing', slug: 'span-gas-cylinders', name: 'Span Calibration Gas Cylinders', nameAr: 'أسطوانات غازات المعايرة القياسية' },
  { id: 'sub-bump-stations', categoryId: 'calibration-testing', slug: 'bump-test-stations', name: 'Automated Bump Test Stations', nameAr: 'محطات اختبار الصدمة الآلية' }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'ms-fid-800',
    slug: 'ms-fid-800-total-hydrocarbon-analyzer',
    code: 'MS-FID-800',
    name: 'Measuresoft FID-800 Online Mud Logging Hydrocarbon Analyzer',
    nameAr: 'محلل الهيدروكربونات الكلية عبر الإنترنت لتسجيل سائل الحفر MS-FID-800',
    brandId: 'measuresoft',
    categoryId: 'mud-logging',
    subcategoryId: 'sub-hydrocarbon-analyzers',
    shortDesc: 'Continuous fast-response Flame Ionization Detector (FID) engineered for real-time C1-C5 gas breakdown and total hydrocarbon monitoring at drilling rigs.',
    shortDescAr: 'كاشف تأين لهبي مستمر وسريع الاستجابة مصمم لرصد غازات C1 إلى C5 والهيدروكربونات الكلية بدقة فائقة على منصات الحفر.',
    description: 'The Measuresoft FID-800 is an offshore-grade total hydrocarbon analyzer specifically developed for harsh upstream petroleum environments across the Gulf of Suez and Western Desert drilling units. Featuring an integrated ultra-pure hydrogen generator interface, precision pneumatic sample bypass system, and linear dynamic detection from 0.5 ppm up to 100% methane equivalent, this instrument delivers reliable lithological gas detection even during intense high-rate drilling trips and underbalanced drilling scenarios. Rugged 19-inch rack-mount chassis complies with oilfield anti-vibration standards and interfaces via industrial Modbus TCP/IP directly to all common Mud Logging acquisition suites, WITSml databases, and rig control networks.',
    descriptionAr: 'جهاز Measuresoft FID-800 هو محلل هيدروكربونات متطور ومصمم للعمل الشاق في بيئات التنقيب والاستكشاف النفطي بخليج السويس والصحراء الغربية. يحتوي على نظام سحب عينات هوائي متقدم مع إمكانية الكشف من 0.5 جزء في المليون حتى 100% مكافئ ميثان، مما يضمن تسجيل أدق فواصل الغازات الجيولوجية حتى أثناء الحفر السريع. يتوافق هيكله المعدني 19 بوصة مع معايير مقاومة الاهتزازات النفطية ويدعم بروتوكولات Modbus TCP/IP و WITSml للربط المباشر مع غرف التحكم وكبائن تسجيل سائل الحفر.',
    applications: [
      'Real-time mud logging gas chromatography on onshore and offshore exploration rigs',
      'Underbalanced drilling gas influx early warning and reservoir characterization',
      'Geosteering and formation evaluation in deep horizontal wells',
      'Well control gas monitoring in the shale and tight sand fields of the Western Desert'
    ],
    applicationsAr: [
      'كروماتوغرافيا غازات سائل الحفر اللحظية على منصات الحفر البرية والبحرية',
      'الإنذار المبكر لدخول الغازات أثناء الحفر متوازن الضغط وتقييم المكامن',
      'التوجيه الجيولوجي الدقيق في الآبار الأفقية العميقة',
      'مراقبة تدفقات الغازات والتحكم في الآبار بحقول الصحراء الغربية'
    ],
    keyFeatures: [
      'Ultra-fast T90 response time under 1.2 seconds for instantaneous gas strike notification',
      'Dual detector capability: Total Hydrocarbon (THC) and rapid chromatograph split',
      'Built-in automated zero & span calibration sequencing with logging history',
      'Flame-out auto shutoff safety interlock with automatic nitrogen flame purge',
      'Industrial Modbus RTU/TCP, 4-20mA analog output, and WITS Level 0 output',
      'Heavy-duty internal stainless steel sample conditioning manifold'
    ],
    keyFeaturesAr: [
      'زمن استجابة قياسي T90 أقل من 1.2 ثانية للتنبيه الفوري لظهور الغاز',
      'قدرة قياس مزدوجة: قياس الهيدروكربونات الكلية مع فصل غازات الحفر C1-C5',
      'معايرة تلقائية مدمجة للصفر ومجال القياس مع حفظ سجلات المعايرة',
      'صمام أمان لإيقاف تدفق الهيدروجين فور انطفاء الشعلة مع تفريغ آمن بالنيتروجين',
      'منافذ اتصال Modbus و 4-20mA وتوافق تام مع بروتوكول WITS',
      'أنابيب سحب عينات داخلية مصنوعة بالكامل من الستانلس ستيل المقاوم للتآكل'
    ],
    includes: [
      'Measuresoft FID-800 Main Rack Instrument Unit',
      'Heated sample transfer line connector kit (15 meters, 110V/220V)',
      'Pre-filtration primary water trap & coalescing particulate assembly',
      'NIST-Traceable Factory Calibration Certificate (12-month validity)',
      'Comprehensive English & Arabic technical commissioning manual',
      'Complete field spare parts maintenance package (igniter, O-rings, filters)'
    ],
    includesAr: [
      'وحدة جهاز Measuresoft FID-800 القياسية لتركيب الرفوف',
      'طقم وصلات خط سحب العينات الحراري بطول 15 متراً',
      'مجمع ترشيح أولي لإزالة الرطوبة والشوائب العالقة',
      'شهادة معايرة مصنعية معتمدة وفق معايير NIST صالحة لمدة 12 شهراً',
      'دليل تشغيل وصيانة فني شامل باللغتين الإنجليزية والعربية',
      'طقم قطع غيار ميدانية للصيانة الأولية (شمعات الإشعال، موانع التسرب، والفلاتر)'
    ],
    specs: [
      { label: 'Detection Principle', labelAr: 'مبدأ القياس', value: 'Flame Ionization Detection (FID)', valueAr: 'كاشف التأين اللهبي (FID)' },
      { label: 'Measurement Range', labelAr: 'نطاق القياس', value: '0.5 ppm to 100% CH4 equivalent (0 to 1,000,000 ppm)', valueAr: 'من 0.5 جزء في المليون حتى 100% مكافئ ميثان' },
      { label: 'Response Time (T90)', labelAr: 'زمن الاستجابة T90', value: 'Less than 1.2 seconds', valueAr: 'أقل من 1.2 ثانية' },
      { label: 'Accuracy', labelAr: 'الدقة', value: '±1% of full scale reading', valueAr: '±1% من كامل القراءة' },
      { label: 'Carrier Gas', labelAr: 'غاز الحمل والتشغيل', value: 'Ultra High Purity Hydrogen (99.999%) / Hydrocarbon-free zero air', valueAr: 'هيدروجين عالي النقاوة 99.999% وهواء نقي خالٍ من الهيدروكربونات' },
      { label: 'Operating Temperature', labelAr: 'درجة حرارة التشغيل', value: '-10°C to +55°C (Chassis rating)', valueAr: '-10 إلى +55 درجة مئوية' },
      { label: 'Power Supply', labelAr: 'جهد التغذية', value: '110 - 240 VAC, 50/60 Hz, 350 Watts peak', valueAr: '110 - 240 فولت تيار متردد، 50/60 هرتز' },
      { label: 'Signal Output', labelAr: 'مخارج الإشارة', value: '4-20 mA active, RS-485 Modbus RTU, Ethernet TCP/IP, WITS 0', valueAr: '4-20 مللي أمبير، Modbus RTU، شبكة Ethernet، WITS' },
      { label: 'Dimensions & Weight', labelAr: 'الأبعاد والوزن', value: '19" 3U Rack Mount, 483 x 133 x 420 mm, 14.5 kg', valueAr: 'مقاس 19 بوصة 3U، 483 × 133 × 420 مم، 14.5 كجم' },
      { label: 'Approvals & Certifications', labelAr: 'الاعتمادات الدولية', value: 'CE, ATEX Zone 2 Safe Area Skid, ISO 9001:2015, EGPC Approved', valueAr: 'معتمد من الهيئة المصرية العامة للبترول، CE، و ISO 9001' }
    ],
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
    ],
    files: [
      {
        id: 'file-fid-800-brochure',
        title: 'Measuresoft FID-800 Technical Brochure',
        titleAr: 'البروشور الفني لمحلل FID-800',
        type: 'brochure',
        size: '2.4 MB',
        downloadUrl: '/downloads/measuresoft-fid-800-brochure.pdf',
        pageCount: 6
      },
      {
        id: 'file-fid-800-manual',
        title: 'Measuresoft FID-800 Field Installation & Calibration Manual',
        titleAr: 'دليل التركيب الميداني والمعايرة لمحلل FID-800',
        type: 'manual',
        size: '5.8 MB',
        downloadUrl: '/downloads/measuresoft-fid-800-manual.pdf',
        pageCount: 42
      }
    ],
    atexRating: 'Zone 2 / Safe Area Skid Mount',
    gasTargets: ['Total Hydrocarbons', 'Methane (C1)', 'Ethane (C2)', 'Propane (C3)', 'Iso-Butane (iC4)', 'Normal-Butane (nC4)', 'Pentanes (C5)'],
    targetIndustry: ['Mud Logging Contractors', 'Upstream Oil & Gas Operators', 'Offshore Drilling Rigs', 'Geothermal Wells'],
    inStock: true,
    isFeatured: true,
    warrantyMonths: 24
  },
  {
    id: 'crowcon-xgs-fixed-h2s',
    slug: 'crowcon-xgard-bright-toxic-gas-detector',
    code: 'CW-XGB-H2S',
    name: 'Crowcon Xgard Bright Addressable Fixed Gas Detector with OLED Display',
    nameAr: 'كاشف الغازات الثابت القابل للعنونة بشاشة OLED من كروكون Xgard Bright',
    brandId: 'crowcon',
    categoryId: 'gas-detection',
    subcategoryId: 'sub-fixed-gas',
    shortDesc: 'Flameproof Ex d certified transmitter with non-intrusive magnetic calibration, vivid OLED screen, and relay outputs for H2S, CH4, and Oxygen monitoring.',
    shortDescAr: 'كاشف ثابت مضاد للانفجار بمعيار Ex d مزود بشاشة OLED واضحة ومعايرة مغناطيسية دون فتح الغطاء لرصد غاز كبريتيد الهيدروجين والميثان.',
    description: 'The Crowcon Xgard Bright is an all-in-one fixed point gas detector designed for high-risk oil and gas drilling installations, pipeline manifolds, and crude storage tank farms. Engineered with an IP66/67 marine-grade 316 stainless steel or alloy enclosure, it provides local visual gas concentration readouts, fault codes, and calibration prompts through a high-contrast organic LED display visible in full desert sunlight. Featuring non-intrusive one-man magnetic wand calibration, operators never need to declassify hazardous zones or secure hot work permits just to perform routine bump tests and sensor span adjustments. Incorporates both 4-20mA analogue and addressable RS-485 Modbus outputs alongside onboard alarm and fault relays.',
    descriptionAr: 'يعد جهاز Crowcon Xgard Bright حلاً متكاملاً لكشف الغازات الثابتة في بيئات الحفر النفطي الشاقة، ومحطات الضخ، وخزانات النفط الخام. تم تصنيع الهيكل من سبائك الألومنيوم المقاوم للتآكل أو الستانلس ستيل البحري 316 بتصنيف حماية IP66/67. يتميز بشاشة OLED شديدة السطوع تتيح القراءة الواضحة تحت أشعة الشمس المباشرة، مع ميزة المعايرة المغناطيسية السريعة التي تتيح لفني واحد إجراء المعايرة دون الحاجة لفتح الغطاء أو إصدار تصاريح أعمال حرجة في المناطق المصنفة خطرة.',
    applications: [
      'Drilling rig floor, shaker screen room, and cellar H2S perimeter monitoring',
      'Gas processing plants and sweetening units',
      'Offshore wellhead jackets and production manifold decks',
      'FPSO crude oil cargo holds and pump room surveillance'
    ],
    applicationsAr: [
      'مراقبة غاز H2S في أرضية برج الحفر، وغرف مناخل الطفلة، وقاع البريمة',
      'محطات معالجة وتنقية الغاز الطبيعي',
      'رؤوس الآبار والمنصات البحرية لمنع تسربات الغاز',
      'عنابر شحن وتفريغ ناقلات النفط ووحدات التخزين العائمة'
    ],
    keyFeatures: [
      'ATEX, IECEx, and UKEX explosion-proof certification for Zone 1 and Zone 2',
      'Bright multi-color OLED status screen with live reading and trending graph',
      'Non-intrusive magnetic wand calibration eliminates need for hot work permits',
      'Plug-and-play pre-calibrated smart sensor modules for 5-minute field swaps',
      'Dual relay contacts (Alarm 1, Alarm 2) and dedicated fault output',
      'Corrosion-proof 316 Stainless Steel option for aggressive offshore salt mist'
    ],
    keyFeaturesAr: [
      'حاصل على شهادات ATEX و IECEx ضد الانفجار للمنطقة 1 والمنطقة 2',
      'شاشة OLED متعددة الألوان تعرض التركيز الحي ورسماً بیانياً فورياً للمؤشر',
      'معايرة مغناطيسية دون فتح الهيكل مما يلغي الحاجة لتصاريح العمل الحراري',
      'حساسات ذكية معايرة مسبقاً قابلة للاستبدال الميداني في أقل من 5 دقائق',
      'مرحلات إنذار داخلية مزدوجة مع مخرج مستقل لأعطال الجهاز',
      'خيار تصنيع الهيكل من الستانلس ستيل 316 المقاوم لرذاذ الأملاح البحرية'
    ],
    includes: [
      'Crowcon Xgard Bright Transmitter Unit (pre-fitted with selected sensor)',
      'High-grade magnetic calibration key wand',
      'Allen key tool for mounting bracket adjustments',
      'Factory traceable ATEX test inspection & calibration document',
      'Terminal wiring diagram and installation guide',
      'Stainless steel weather protection rain cap'
    ],
    includesAr: [
      'وحدة إرسال Crowcon Xgard Bright مجهزة بالحساس المطلوب',
      'عصا المعايرة المغناطيسية الذكية',
      'مفتاح ألين للتحكم وتثبيت الحوامل الميدانية',
      'شهادة فحص واختبار مطابقة لمعايير ATEX ومعايرة مصنعية',
      'مخطط التوصيل الكهربائي ودليل التركيب الهندسي',
      'غطاء حماية خارجي من الفولاذ المقاوم للعوامل الجوية'
    ],
    specs: [
      { label: 'Sensor Type Options', labelAr: 'أنواع الحساسات المتاحة', value: 'Electrochemical (H2S, CO, O2, SO2) / Pellistor or Infrared (LEL Combustible)', valueAr: 'كهروكيميائي (H2S, CO, O2) أو حبيبي حراري/أشعة تحت حمراء (LEL)' },
      { label: 'H2S Measurement Range', labelAr: 'نطاق قياس H2S', value: '0 - 20 ppm, 0 - 50 ppm, 0 - 100 ppm user selectable', valueAr: '0 - 20 أو 0 - 50 أو 0 - 100 جزء بالمليون قابل للاختيار' },
      { label: 'Response Time (T90)', labelAr: 'زمن الاستجابة T90', value: 'H2S: < 15 seconds; Methane LEL: < 10 seconds', valueAr: 'لـ H2S أقل من 15 ثانية، وللغاز القابل للاشتعال أقل من 10 ثوانٍ' },
      { label: 'Display Type', labelAr: 'نوع الشاشة', value: 'High-contrast graphical OLED with live ppm/LEL, alarm status, and diagnostics', valueAr: 'شاشة OLED بيانية عالية التباين تعرض التركيز وحالة الإنذار' },
      { label: 'Enclosure Material', labelAr: 'مادة الهيكل الخارجي', value: 'Epoxy coated copper-free aluminium or 316 Stainless Steel', valueAr: 'ألومنيوم معالج براتنج الإيبوكسي أو ستانلس ستيل 316' },
      { label: 'Ingress Protection', labelAr: 'معيار الحماية من الأتربة والماء', value: 'IP65 & IP66 certified with splash guard', valueAr: 'تصنيف IP65 و IP66 مع واقي التدفق المائي' },
      { label: 'Outputs & Communication', labelAr: 'الاتصالات والمخارج', value: '4-20mA (sink/source), RS-485 Modbus RTU, 2x Alarm Relays (SPDT 2A @ 30Vdc)', valueAr: 'مخرج 4-20 مللي أمبير، RS-485 Modbus، ومرحلان إنذار' },
      { label: 'Explosion Proof Rating', labelAr: 'تصنيف مقاومة الانفجار', value: 'ATEX / IECEx II 2 GD Ex db IIB+H2 T6 Gb (Alloy) / Ex db IIC T6 Gb (SS)', valueAr: 'معتمد ATEX / IECEx للمنطقة الأولى II 2 GD Ex db IIC T6' }
    ],
    images: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
    ],
    files: [
      {
        id: 'file-crowcon-xgb-brochure',
        title: 'Crowcon Xgard Bright Product Datasheet',
        titleAr: 'ورقة البيانات الفنية لجهاز Crowcon Xgard Bright',
        type: 'datasheet',
        size: '1.9 MB',
        downloadUrl: '/downloads/crowcon-xgard-bright-datasheet.pdf',
        pageCount: 4
      },
      {
        id: 'file-crowcon-xgb-manual',
        title: 'Xgard Bright Operating & Maintenance Manual',
        titleAr: 'دليل التشغيل والصيانة الفني Xgard Bright',
        type: 'manual',
        size: '4.2 MB',
        downloadUrl: '/downloads/crowcon-xgard-bright-manual.pdf',
        pageCount: 38
      }
    ],
    atexRating: 'ATEX & IECEx Zone 1 / Zone 2 Ex d',
    gasTargets: ['Hydrogen Sulfide (H2S)', 'Combustible Gases (LEL)', 'Carbon Monoxide (CO)', 'Oxygen (O2)', 'Sulfur Dioxide (SO2)'],
    targetIndustry: ['Upstream Rigs', 'Petrochemical Plants', 'Refinery Units', 'Gas Metering Stations'],
    inStock: true,
    isFeatured: true,
    warrantyMonths: 36
  },
  {
    id: 'honeywell-multirae-pro',
    slug: 'honeywell-multirae-pro-multi-gas-pid-monitor',
    code: 'HW-MR-PRO',
    name: 'Honeywell MultiRAE Pro Portable 6-Gas Monitor with Precision PID',
    nameAr: 'جهاز كشف الغازات المحمول متعدد الحساسات سداسي الغازات MultiRAE Pro من هانيويل',
    brandId: 'rae-systems',
    categoryId: 'gas-detection',
    subcategoryId: 'sub-portable-gas',
    shortDesc: 'The premier wireless portable multi-gas detector for drilling safety engineers, combining parts-per-billion (ppb) VOC detection with gamma radiation, toxic, and LEL sensors.',
    shortDescAr: 'الجهاز المحمول الرائد لمهندسي السلامة النفطية الذي يجمع بين كشف المركبات العضوية المتطايرة بأجزاء في المليار، مع رصد الإشعاع، والغازات السامة، ونسب الاشتعال.',
    description: 'The MultiRAE Pro is the industry’s most sophisticated wireless portable chemical and radiation detector for petroleum safety officers and emergency response teams. Combining an ultra-sensitive photoionization detector (PID) capable of resolving volatile organic compounds down to 10 parts-per-billion (ppb) with up to five additional swappable smart sensors—including LEL combustible gas, Hydrogen Sulfide, Carbon Monoxide, Oxygen, and a semiconductor gamma radiation sensor—this instrument safeguards crew members during vessel entry, rig floor turnaround, and hazardous blowout interventions. Built-in wireless capability relays real-time gas readings, alarms, and man-down posture alerts to the remote rig safety command center up to two miles away.',
    descriptionAr: 'يعد جهاز MultiRAE Pro أكثر أجهزة السلامة المحمولة تطوراً لضباط السلامة في المواقع البترولية وفرق التدخل السريع. يجمع بين كاشف التأين الضوئي (PID) الفائق القادر على قياس المركبات العضوية المتطايرة بدقة تصل إلى 10 أجزاء في المليار، بالإضافة إلى خمسة حساسات ذكية قابلة للتبديل السريع تشمل الغازات القابلة للاشتعال، كبريتيد الهيدروجين، أول أكسيد الكربون، الأكسجين، وحساس إشعاع غاما. يحتوي الجهاز على شبكة لاسلكية تبث القراءات الحية وحالات سقوط العامل إلى غرفة التحكم المركزية على مسافة تصل إلى 3 كيلومترات.',
    applications: [
      'Confined space entry into crude storage tanks, mud pits, and separator vessels',
      'Personal protection for drilling superintendents and mud engineers during sour gas wells',
      'Environmental fence-line monitoring and hydrocarbon vapor leak pinpointing',
      'Emergency response during well kicks and pipeline maintenance blowdowns'
    ],
    applicationsAr: [
      'دخول الأماكن المغلقة في خزانات النفط وأحواض سائل الحفر وأوعية الفصل',
      'الحماية الشخصية لمديري الحفر ومهندسي الطفلة في الآبار ذات الغازات الحامضية',
      'مراقبة الانبعاثات البيئية وتحديد أماكن التسريبات الهيدروكربونية الدقيقة',
      'حالات الاستجابة للطوارئ أثناء تدفقات الآبار المفاجئة وعمليات صيانة الخطوط'
    ],
    keyFeatures: [
      'Simultaneous detection of up to 6 threats including VOCs, toxic gases, combustibles, and radiation',
      'Field-replaceable smart sensors with automatic digital calibration coefficient retention',
      'Integrated wireless telemetry connects directly to Measuresoft Rig Safety Base Station',
      'Man-Down motion sensor with automatic audible and visual emergency alarm',
      'Built-in internal sampling pump capable of pulling gas samples up to 100 feet (30m)',
      'Large backlit graphic screen with 180° auto-flip orientation for easy chest pocket viewing'
    ],
    keyFeaturesAr: [
      'رصد متزامن لما يصل إلى 6 مخاطر تشمل المركبات العضوية، والغازات السامة، والاشتعال، والإشعاع',
      'حساسات ذكية قابلة للاستبدال الميداني تحتفظ ببيانات المعايرة رقمياً داخل الحساس',
      'بث لاسلكي مباشر إلى محطة الأمان المركزية بالبريمة لضمان المتابعة الفورية',
      'مستشعر حركة مدمج لكشف حالات سقوط العامل (Man-Down) وإطلاق إنذار طارئ',
      'مضخة سحب داخلية قوية قادرة على سحب العينات من مسافة 30 متراً عبر الخراطيم',
      'شاشة رسومية كبيرة مزودة بإضاءة خلفية وتدوير تلقائي للقراءة بزاوية 180 درجة'
    ],
    includes: [
      'MultiRAE Pro instrument with specified PID and toxic gas smart sensors',
      'Rechargeable Li-Ion battery pack plus alkaline backup battery adapter',
      'Universal 110-240V AC desktop charging cradle with power adapter',
      '15-foot Tygon sample tubing with external water trap particulate filter',
      'PID cleaning tool kit with optical sensor polish',
      'Heavy-duty Pelican transport hard case with custom foam insert'
    ],
    includesAr: [
      'جهاز MultiRAE Pro مجهز بحساس PID الذكي والحساسات المطلوبة',
      'بطارية ليثيوم أيون قابلة لإعادة الشحن مع محول إضافي لبطاريات قلوية',
      'قاعدة شحن مكتبية بجهد عالمي 110-240 فولت مع محول الطاقة',
      'خرطوم سحب عينات تايكون بطول 4.5 متر مع فلتر حماية من الرطوبة',
      'أداة ومستلزمات صيانة وتنظيف عدسة حساس PID الدقيقة',
      'حقيبة نقل وحماية عسكرية متينة ضد الصدمات والماء (Pelican Case)'
    ],
    specs: [
      { label: 'Sensor Configuration', labelAr: 'توزيع الحساسات', value: '10.6 eV PID, LEL Catalytic/NDIR, O2, H2S, CO, Gamma Radiation', valueAr: 'حساس PID 10.6 eV، حساس LEL، أكسجين، كبريتيد الهيدروجين، إشعاع غاما' },
      { label: 'VOC Resolution', labelAr: 'دقة قياس المركبات العضوية', value: '10 ppb to 2,000 ppm (with high-range options up to 5,000 ppm)', valueAr: 'من 10 أجزاء في المليار حتى 2000 جزء في المليون' },
      { label: 'Sampling Mechanism', labelAr: 'آلية سحب العينات', value: 'Internal diaphragm pump, flow rate 250 cc/min, 30m draw distance', valueAr: 'مضخة غشائية مدمجة بمعدل 250 سم3/دقيقة وسحب حتى 30 متراً' },
      { label: 'Alarms', labelAr: 'مستويات الإنذار', value: '95 dB buzzer at 30cm, flashing ultra-bright LEDs, vibration, man-down alert', valueAr: 'إنذار صوتي 95 ديسيبل، وميض ليد فائق السطوع، اهتزاز، وإنذار سقوط' },
      { label: 'Battery Runtime', labelAr: 'زمن تشغيل البطارية', value: 'Up to 18 hours continuous operation (Li-Ion pack)', valueAr: 'حتى 18 ساعة عمل مستمرة ببطارية الليثيوم' },
      { label: 'Operating Conditions', labelAr: 'ظروف التشغيل', value: '-20°C to +50°C (-4°F to 122°F), 0% to 95% non-condensing humidity', valueAr: '-20 إلى +50 درجة مئوية، ورطوبة حتى 95%' },
      { label: 'Ingress Protection', labelAr: 'مقاومة الماء والغبار', value: 'IP65 (water jet and dust tight)', valueAr: 'تصنيف IP65 المقاوم للأتربة ورذاذ المياه الشديد' },
      { label: 'Intrinsically Safe Certifications', labelAr: 'شهادات الأمان الجوهري', value: 'ATEX II 1G Ex ia IIC T4 Ga, CSA Class I, Div 1, Groups A, B, C, D', valueAr: 'معتمد للأمان الجوهري ATEX II 1G Ex ia IIC T4 Ga للمنطقة صفر' }
    ],
    images: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    files: [
      {
        id: 'file-mr-pro-brochure',
        title: 'Honeywell MultiRAE Pro Oilfield Specification Brochure',
        titleAr: 'البروشور الفني لمواصفات MultiRAE Pro النفطية',
        type: 'brochure',
        size: '3.1 MB',
        downloadUrl: '/downloads/honeywell-multirae-pro-brochure.pdf',
        pageCount: 8
      },
      {
        id: 'file-mr-pro-manual',
        title: 'MultiRAE Pro Complete User Manual & Sensor Guide',
        titleAr: 'دليل المستخدم الكامل وإرشادات صيانة الحساسات',
        type: 'manual',
        size: '6.4 MB',
        downloadUrl: '/downloads/honeywell-multirae-pro-manual.pdf',
        pageCount: 54
      }
    ],
    atexRating: 'ATEX Zone 0 / Class I Div 1',
    gasTargets: ['Volatile Organic Compounds (VOCs)', 'H2S', 'CO', 'O2', 'Combustible LEL', 'Gamma Radiation'],
    targetIndustry: ['Drilling Contractors', 'H2S Safety Service Companies', 'Industrial Tank Cleaning', 'Refinery Maintenance'],
    inStock: true,
    isFeatured: true,
    warrantyMonths: 24
  },
  {
    id: 'ms-pdeg-500-degasser',
    slug: 'ms-pdeg-500-pneumatic-mud-gas-degasser',
    code: 'MS-PDEG-500',
    name: 'Measuresoft PDEG-500 Pneumatic Mud Logging Gas Degasser & Agitator',
    nameAr: 'مستخلص ومقلب غازات سائل الحفر الهوائي Measuresoft PDEG-500',
    brandId: 'measuresoft',
    categoryId: 'mud-logging',
    subcategoryId: 'sub-degassers',
    shortDesc: 'Explosion-proof pneumatic air-motor gas extractor designed for continuous, repeatable gas liberation from the mud return flowline.',
    shortDescAr: 'مستخلص غازات يعمل بمحرك هوائي مضاد للانفجار لاستخلاص الغازات باستمرار ودقة تكرارية عالية من خط رجوع سائل الحفر.',
    description: 'The Measuresoft PDEG-500 is the critical primary sampling interface for every mud logging unit operating in Egyptian and Middle Eastern exploration fields. Installed directly over the shale shaker header box or possum belly, this rugged pneumatic system utilizes a high-torque pneumatic turbine motor to aggressively agitate viscous drilling fluids and liberate entrained formation gases including methane, ethane, propane, and sour gas components. Its non-electrical design makes it intrinsically compliant for hazardous Zone 0 and Zone 1 locations without requiring expensive flameproof enclosures. Engineered from marine-grade 316L stainless steel, it resists abrasive barite weighted muds, high temperatures up to 120°C, and highly corrosive H2S gas streams.',
    descriptionAr: 'يعد جهاز Measuresoft PDEG-500 الواجهة الأساسية الأولى لجمع عينات الغاز في وحدات تسجيل سائل الحفر العاملة بمصر والشرق الأوسط. يتم تثبيت الجهاز مباشرة فوق حوض رجوع الطفلة (Possum Belly) أمام مناخل الشيل شيكر، حيث يستخدم محركاً توربينياً يعمل بالهواء المضغوط لتقليب سائل الحفر عالي الكثافة واستخلاص الغازات الجيولوجية الذائبة بكفاءة تامة. تصميمه الميكانيكي الخالي من التوصيلات الكهربائية يجعله آمناً تماماً للعمل في المناطق شديدة الخطورة Zone 0، وهو مصنوع بالكامل من الستانلس ستيل 316L لمقاومة تآكل البارايت والحرارة العالية حتى 120 مئوية وغاز كبريتيد الهيدروجين.',
    applications: [
      'Continuous hydrocarbon gas extraction from active drilling mud at the shaker ditch',
      'Gas monitoring in high-pressure high-temperature (HPHT) deep wells',
      'Geochemical reservoir gas ratio analysis and mud balance monitoring',
      'Early detection of gas kicks in deep offshore Mediterranean gas drilling'
    ],
    applicationsAr: [
      'استخلاص الغازات الهيدروكربونية المستمر من سائل الحفر النشط أمام مناخل الطفلة',
      'رصد الغازات في الآبار العميقة ذات الضغط والحرارة الفائقة (HPHT)',
      'تحليل نسب الغازات الجيولوجية ومراقبة توازن سوائل الحفر',
      'الكشف المبكر لتدفقات الغاز غير المخططة في آبار الغاز البحرية العميقة'
    ],
    keyFeatures: [
      '100% pneumatic air-driven operation eliminates ignition risk in Zone 0 classified zones',
      'High-shear impeller blade geometry maximizes gas extraction from heavy oil-based muds (OBM)',
      'Integrated regulated sample suction port with vortex moisture knock-out drain',
      'Corrosion and erosion resistant marine 316L stainless steel submerged shaft and housing',
      'Adjustable rigid mounting framework fits all standard Derrick and Brandt shaker troughs',
      'Low air consumption design requires standard rig air supply (6-8 bar, 90-120 psi)'
    ],
    keyFeaturesAr: [
      'تشغيل هوائي بنسبة 100% يلغي تماماً مخاطر الاشتعال الكهربائي في منطقة الخطر Zone 0',
      'تصميم مروحة تقليب هيدروليكية يضمن أقصى استخلاص للغاز حتى مع الطفلة الزيتية الثقيلة',
      'منفذ سحب عينات مدمج مع فاصل حلزوني لتصريف الرطوبة ورذاذ الطفلة',
      'عمود تقليب وهيكل مغمور مصنوع من ستانلس ستيل 316L المقاوم للحت والتآكل',
      'إطار تثبيت فولاذي متين قابل للتعديل ليتناسب مع كافة أنواع ومقاسات مناخل الحفر',
      'استهلاك اقتصادي للهواء المضغوط المتوفر بالبريمة بضغط قياسي من 6 إلى 8 بار'
    ],
    includes: [
      'PDEG-500 Pneumatic Gas Agitator Unit with 316L stainless steel shaft and impeller',
      'Heavy-duty adjustable angle mounting bracket and clamps',
      'Air preparation assembly: filter, regulator, lubricator (FRL) with pressure gauge',
      'Flexible reinforced air hose (10 meters) with quick-connect oilfield couplings',
      'Primary sample gas hose with splash barrier filter',
      'Maintenance tool kit and replacement internal brass bushings'
    ],
    includesAr: [
      'وحدة مستخلص الغاز الهوائي PDEG-500 بعمود ومروحة من الستانلس ستيل 316L',
      'حامل تثبيت ميكانيكي قوي متعدد الزوايا مع مشابك التثبيت على الحوض',
      'وحدة معالجة الهواء: فلتر، منظم ضغط، ومزيتة (FRL) مع عداد قياس الضغط',
      'خرطوم هواء مقوى عالي التحمل بطول 10 أمتار مع وصلات سريعة صناعية',
      'خرطوم سحب عينات أولي مع فلتر حاجز الرذاذ',
      'طقم صيانة دورية وقطع جلب برونزية احتياطية'
    ],
    specs: [
      { label: 'Operating Principle', labelAr: 'مبدأ العمل', value: 'Pneumatic mechanical high-velocity rotational mud agitation & gas extraction', valueAr: 'تقليب ميكانيكي هوائي عالي السرعة لسائل الحفر واستخلاص الغاز' },
      { label: 'Drive Mechanism', labelAr: 'آلية الحركة', value: 'Compressed air vane motor, explosion-free', valueAr: 'محرك هوائي توربيني خالٍ من التوصيلات الكهربائية' },
      { label: 'Air Supply Required', labelAr: 'متطلبات الهواء المضغوط', value: '60 to 120 psi (4 to 8.5 bar), 12 CFM standard rig air', valueAr: 'من 4 إلى 8.5 بار، باستهلاك 12 قدم مكعب/دقيقة من هواء البريمة' },
      { label: 'Impeller Speed', labelAr: 'سرعة دوران المروحة', value: '1,200 to 2,800 RPM variable via needle valve regulator', valueAr: 'من 1200 إلى 2800 دورة بالدقيقة قابلة للضبط بصمام تحكم' },
      { label: 'Extraction Chamber Material', labelAr: 'مادة غرفة الاستخلاص', value: '316L Stainless Steel seamless construction', valueAr: 'فولاذ لا يصدأ بدرجة 316L معالجة حرارياً' },
      { label: 'Mud Temperature Range', labelAr: 'نطاق حرارة سائل الحفر', value: '-20°C up to +125°C continuous mud contact', valueAr: '-20 حتى +125 درجة مئوية تلامس مستمر مع الطفلة' },
      { label: 'Sample Gas Port', labelAr: 'منفذ سحب الغاز', value: '1/4" Swagelok stainless steel quick fitting with moisture trap', valueAr: 'وصلة Swagelok ربع بوصة ستانلس ستيل مع مصيدة رطوبة' },
      { label: 'Hazardous Area Compliance', labelAr: 'تصنيف المناطق الخطرة', value: 'ATEX / IECEx Zone 0 Mechanical Equipment Directive (Non-Electrical)', valueAr: 'متوافق ميكانيكياً مع توجيهات ATEX Zone 0 (معدات غير كهربائية)' }
    ],
    images: [
      'https://images.unsplash.com/photo-1516197155649-ca2ff10415a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
    ],
    files: [
      {
        id: 'file-pdeg-500-brochure',
        title: 'Measuresoft PDEG-500 Mud Degasser Specification Sheet',
        titleAr: 'بطاقة المواصفات الفنية لمستخلص الغاز PDEG-500',
        type: 'datasheet',
        size: '1.8 MB',
        downloadUrl: '/downloads/measuresoft-pdeg-500-datasheet.pdf',
        pageCount: 4
      },
      {
        id: 'file-pdeg-500-manual',
        title: 'PDEG-500 Installation & Shaker Trough Mounting Manual',
        titleAr: 'دليل تركيب وتثبيت جهاز PDEG-500 على مناخل الحفر',
        type: 'manual',
        size: '3.6 MB',
        downloadUrl: '/downloads/measuresoft-pdeg-500-manual.pdf',
        pageCount: 22
      }
    ],
    atexRating: 'ATEX Zone 0 Mechanical Non-Electrical',
    gasTargets: ['Total Mud Gas', 'Methane', 'Ethane', 'Propane', 'H2S Gas Liberation'],
    targetIndustry: ['Mud Logging Companies', 'Directional Drilling Operators', 'Offshore Rig Contractors'],
    inStock: true,
    isFeatured: true,
    warrantyMonths: 24
  },
  {
    id: 'det-tronics-x3301-flame',
    slug: 'det-tronics-x3301-multispectrum-ir-flame-detector',
    code: 'DT-X3301',
    name: 'Det-Tronics X3301 Multispectrum Infrared (IR3) Optical Flame Detector',
    nameAr: 'كاشف اللهب البصري بالأشعة تحت الحمراء متعددة الأطياف Det-Tronics X3301',
    brandId: 'det-tronics',
    categoryId: 'gas-detection',
    subcategoryId: 'sub-flame-detectors',
    shortDesc: 'SIL-2 certified triple infrared flame detector engineered for false-alarm immune hydrocarbon fire detection in extreme offshore and desert oil facilities.',
    shortDescAr: 'كاشف لهب ثلاثي الأشعة تحت الحمراء معتمد بمعيار SIL-2 مصمم لكشف حرائق الهيدروكربونات بدقة تامة ومناعة ضد الإنذارات الكاذبة.',
    description: 'The Det-Tronics X3301 is the global gold standard for flame detection across high-consequence upstream oil platforms, LNG liquefaction trains, and refinery crude distillation units. Utilizing patented signal processing algorithms and three discrete infrared optical sensors, the X3301 detects standard hydrocarbon fires up to 215 feet (65 meters) away in less than 3 seconds while remaining completely immune to blinding false alarm sources such as arc welding, radiant space heaters, vehicle headlights, and intense desert sunlight. Housed in a heavy-duty copper-free cast aluminium or 316 stainless steel explosion-proof enclosure with an integrated optical integrity checker (oi), it verifies window cleanliness and optical circuit health every 60 seconds automatically.',
    descriptionAr: 'يمثل جهاز Det-Tronics X3301 المعيار العالمي الأرفع في كشف الحرائق واللهب بمنصات النفط البحرية عالية الخطورة ومحطات تسييل الغاز الطبيعي ومعامل التكرير. بفضل خوارزميات معالجة الإشارات المبتكرة وثلاثة حساسات بصرية للأشعة تحت الحمراء بأطوال موجية متباينة، يستطيع الجهاز كشف حرائق الهيدروكربونات على مسافة تصل إلى 65 متراً في أقل من 3 ثوانٍ، مع مناعة كاملة ضد مصادر الإنذار الكاذب مثل أعمال اللحام الكهربائي وأشعة الشمس الساطعة ومصابيح الشاحنات. يتميز بهيكل خارجي فائق المتانة وميزة الفحص الذاتي التلقائي لنظافة العدسات كل 60 ثانية.',
    applications: [
      'Offshore drilling platform drill floor and wellhead bay fire protection',
      'Crude oil storage tank farms, floating roof rims, and pump rooms',
      'Natural gas compression stations and turbine generator enclosures',
      'Jet fuel and crude loading terminal truck loading racks'
    ],
    applicationsAr: [
      'حماية أرضية البريمة ورؤوس الآبار على منصات الحفر البحرية من الحرائق',
      'مستودعات وخزانات تخزين النفط الخام وحواف الأسقف العائمة ومحطات الضخ',
      'محطات ضغط الغاز الطبيعي وعنابر التوربينات والمولدات الكهربائية الضخمة',
      'منصات شحن وتفريغ صهاريج الوقود والمنتجات البترولية'
    ],
    keyFeatures: [
      'SIL-2 capable certified to IEC 61508 for mission-critical fire safety systems',
      'Triple IR optical design delivers maximum detection range up to 65 meters (215 ft)',
      'Patented Optical Integrity (oi) continuous automatic optical path health check',
      'Unequaled false alarm rejection: immune to sunlight, hot metal radiation, and arc welding',
      'Event logging records 1,500 historic events with date and time stamping in non-volatile memory',
      'FM, CSA, ATEX, IECEx, and INMETRO hazardous location certifications'
    ],
    keyFeaturesAr: [
      'معتمد لمستوى الأمان الصناعي SIL-2 وفق IEC 61508 لمنظومات الإطفاء الحرجة',
      'تصميم ثلاثي الأشعة تحت الحمراء يمنح أطول مدى كشف يصل إلى 65 متراً',
      'فحص ذاتي مستمر لنقاء العدسات وحالة المسار البصري تلقائياً (Optical Integrity)',
      'مناعة لا تضاهى ضد الإنذارات الكاذبة الناتجة عن اللحام والشمس والحرارة العالية',
      'ذاكرة تسجيل داخلية غير متطايرة تحفظ حتى 1500 حدث وتنبيه مع التاريخ والوقت',
      'شهادات عالمية للمناطق الخطرة: ATEX, IECEx, FM, CSA ومعتمد بمصر'
    ],
    includes: [
      'Det-Tronics X3301 Optical Flame Transmitter Head',
      'Heavy-duty stainless steel multi-axis swivel mounting arm',
      'Weather protection sun and rain shield assembly',
      'Inspection and factory calibration SIL test report',
      'Complete field wiring guide and programming manual'
    ],
    includesAr: [
      'رأس كاشف اللهب البصري Det-Tronics X3301',
      'ذراع تثبيت وتوجيه متعدد المحاور من الفولاذ المقاوم للصدأ',
      'واقي خارجي من الشمس والأمطار والعوامل الجوية القاسية',
      'تقرير فحص ومعايرة واختبار SIL المصنعي المعتمد',
      'دليل التوصيل الكهربائي والبرمجة الفنية الميدانية'
    ],
    specs: [
      { label: 'Operating Spectrum', labelAr: 'طيف التشغيل', value: 'Multiple infrared spectral bands (Triple IR / IR3)', valueAr: 'أطياف متعددة للأشعة تحت الحمراء (Triple IR / IR3)' },
      { label: 'Detection Range', labelAr: 'مدى الكشف', value: '215 feet (65 meters) to standard 1 sq ft n-Heptane fire on axis', valueAr: 'حتى 65 متراً لحريق قياسي بمساحة قدم مربع من الهيبتان' },
      { label: 'Response Time', labelAr: 'زمن الاستجابة', value: 'Typically under 3 seconds at maximum distance', valueAr: 'أقل من 3 ثوانٍ على المسافة القصوى' },
      { label: 'Cone of Vision', labelAr: 'زاوية الرؤية', value: '90 degrees horizontal by 90 degrees vertical with 100% field of view', valueAr: '90 درجة أفقياً و 90 درجة رأسياً بحقل رؤية كامل' },
      { label: 'Power Input', labelAr: 'الطاقة المطلوبة', value: '24 VDC nominal (18 to 30 VDC), 4.0 W nominal', valueAr: '24 فولت تيار مستمر (18 إلى 30 فولت)، استهلاك 4 واط' },
      { label: 'Outputs', labelAr: 'مخارج الإشارة', value: '0-20mA HART, Alarm and Fault Relays (Form C 5A @ 30Vdc), RS-485 Modbus', valueAr: 'مخرج 0-20mA مع بروتوكول HART، ومرحلات إنذار وعطل، و Modbus' },
      { label: 'Safety Integrity Level', labelAr: 'مستوى الأمان الوظيفي', value: 'Certified SIL-2 Capable (IEC 61508)', valueAr: 'معتمد وفق أعلى معايير الأمان SIL-2' },
      { label: 'Hazardous Approval', labelAr: 'شهادات مقاومة الانفجار', value: 'ATEX / IECEx Ex db IIC T4-T6 Gb, IP66/IP67', valueAr: 'تصنيف ATEX / IECEx Ex db IIC T4-T6 Gb، حماية IP66/IP67' }
    ],
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
    ],
    files: [
      {
        id: 'file-dt-x3301-brochure',
        title: 'Det-Tronics X3301 Technical Datasheet & SIL Certificate',
        titleAr: 'ورقة البيانات الفنية وشهادة SIL لكاشف X3301',
        type: 'brochure',
        size: '2.8 MB',
        downloadUrl: '/downloads/det-tronics-x3301-datasheet.pdf',
        pageCount: 6
      },
      {
        id: 'file-dt-x3301-manual',
        title: 'Det-Tronics X3301 Instructions & Wiring Guide',
        titleAr: 'دليل التركيب والأسلاك لكاشف اللهب X3301',
        type: 'manual',
        size: '5.1 MB',
        downloadUrl: '/downloads/det-tronics-x3301-manual.pdf',
        pageCount: 46
      }
    ],
    atexRating: 'ATEX / IECEx Zone 1 Ex db IIC T4-T6',
    gasTargets: ['Hydrocarbon Flames', 'Methane/Natural Gas Fires', 'Crude Oil Pool Fires', 'LPG / Propane Flares'],
    targetIndustry: ['Offshore Platforms', 'Refineries', 'LNG Terminals', 'Crude Storage Facilities'],
    inStock: true,
    isFeatured: true,
    warrantyMonths: 36
  },
  {
    id: 'ms-rig-sensor-pack',
    slug: 'ms-rig-surface-sensors-suite',
    code: 'MS-RSS-PKG',
    name: 'Measuresoft Integrated Rig Surface Sensor Instrumentation Suite',
    nameAr: 'حزمة مجسات ومحولات سطح البريمة المتكاملة من Measuresoft',
    brandId: 'measuresoft',
    categoryId: 'mud-logging',
    subcategoryId: 'sub-rig-sensors',
    shortDesc: 'Comprehensive mud logging transducer package including Hook Load Sensor, Standpipe Pressure Transducer, Mud Pit Level Sensor, and Rotary RPM Counter.',
    shortDescAr: 'مجموعة متكاملة من مجسات ومحولات تسجيل الحفر تشمل مجس وزن عمود الحفر، ضغط طلمبات الطفلة، مستوى الأحواض، وعداد دورات الطاولة الدوارة.',
    description: 'The Measuresoft Integrated Rig Surface Sensor Suite provides the foundational real-time physical telemetry required by modern mud logging units and automated drilling monitoring cabins. Fabricated with heavy-duty oilfield connectors, double-shielded polyurethane abrasion-proof cabling, and intrinsically safe 4-20mA electronic heads, each sensor in this package is engineered to withstand severe drilling vibration, shock loads, corrosive drilling fluids, and extreme ambient temperatures from the scorching desert of Upper Egypt to offshore salt mist in the Red Sea. The package includes our flagship 10,000 PSI high-pressure standpipe pressure transmitter with hammer union connection, non-contact ultrasonic mud pit level sensors, hydraulic hookload sensor, and magnetic proximity pump stroke counters.',
    descriptionAr: 'توفر حزمة مجسات سطح البريمة المتكاملة من Measuresoft البيانات الفيزيائية اللحظية الضرورية لوحدات تسجيل سائل الحفر وغرف مراقبة الحفر الحديثة. تم تصنيع كافة المجسات بكابلات مصفحة وموصلات نفطية عسكرية مقاومة للاهتزازات العنيفة، وتعمل بإشارات 4-20 مللي أمبير آمنة جوهرياً. تضم الحزمة محول ضغط الطلمبات حتى 10,000 رطل/بوصة مربعة مع وصلة Hammer Union القياسية، ومجسات الموجات فوق الصوتية لقياس مستوى سائل الحفر في الأحواض، ومجس هيدروليكي لوزن عمود الحفر، ومجسات مغناطيسية لحساب عدد ضربات مضخات الطفلة.',
    applications: [
      'Comprehensive mud logging data acquisition cabins (WITS Level 0 data feeds)',
      'Early detection of drilling kicks and lost circulation events in active mud pits',
      'Weight On Bit (WOB) calculation and rate of penetration (ROP) tracking',
      'Drilling hydraulics monitoring and pump efficiency diagnostics'
    ],
    applicationsAr: [
      'تغذية كبائن ووحدات تسجيل سائل الحفر بالبيانات اللحظية وفق بروتوكول WITS',
      'الكشف الفوري المبكر عن تدفقات الآبار (Kick) وفقدان سائل الحفر في الأحواض',
      'حساب الوزن الواقع على دقاق الحفر ومعدل الاختراق الجيولوجي للصخور',
      'مراقبة هيدروليكا الحفر وضغوط طلمبات الطفلة وكفاءة الضخ'
    ],
    keyFeatures: [
      'Complete turn-key rig instrumentation kit compatible with all standard data loggers',
      '10,000 PSI hammer union pressure transmitter with inconel wetted diaphragm',
      'Non-contact ultrasonic pit depth level sensor with false echo suppression',
      'Rugged magnetic proximity stroke counters for triplex drilling pumps',
      'High-durability hydraulic hook load cell with quick bleed coupling',
      'All components ATEX / IECEx certified for Zone 0 and Zone 1 hazardous placement'
    ],
    keyFeaturesAr: [
      'حزمة قياس متكاملة وجاهزة للربط الفوري مع كافة أنظمة وكبائن تسجيل الحفر',
      'محول ضغط حتى 10,000 PSI مزود بوصلة هامر يونيون وغشاء اينكونيل مقاوم للتآكل',
      'مجس التراسونيك لقياس مستوى أحواض الطفلة دون تلامس مع تنقية الصدى الكاذب',
      'مجسات سرعة وضغط مغناطيسية لمضخات الطفلة الثلاثية عالية التحمل',
      'خلية قياس هيدروليكية لوزن عمود الحفر مع وصلات تفريغ هواء سريعة',
      'كافة المجسات معتمدة بمعايير ATEX و IECEx للعمل في المناطق المصنفة Zone 0 و Zone 1'
    ],
    includes: [
      '1x 10,000 PSI WECO 1502 Hammer Union Pressure Transmitter (4-20mA output)',
      '4x Intrinsically Safe Ultrasonic Mud Pit Level Transducers (Range 0.3 - 8m)',
      '3x Magnetic Proximity Mud Pump Stroke Counters with mounting brackets',
      '1x Rotary Table RPM Proximity Sensor with heavy magnetic mount',
      '1x Hydraulic Deadline Hookload Sensor with calibrated gauge port',
      'Heavy-duty armoured interconnect cables (50 meters per sensor)',
      'NIST Traceable multi-point calibration certificates for all channels'
    ],
    includesAr: [
      'محول ضغط عالي 10,000 PSI مع وصلة WECO 1502 ومخرج 4-20 مللي أمبير',
      'عدد 4 مجسات التراسونيك لقياس مستوى أحواض سائل الحفر (مدى 0.3 - 8 أمتار)',
      'عدد 3 مجسات مغناطيسية لحساب ضربات مضخات الطفلة مع قواعد تثبيت',
      'مجس قياس سرعة دوران الطاولة الدوارة مع قاعدة مغناطيسية قوية',
      'مجس هيدروليكي لقياس وزن عمود الحفر مع منفذ قياس معاير',
      'كابلات توصيل مصفحة عسكرية بطول 50 متراً لكل مجس',
      'شهادات معايرة دقيقة معتمدة وفق معايير NIST لكافة القنوات'
    ],
    specs: [
      { label: 'Standpipe Pressure Range', labelAr: 'نطاق ضغط الطلمبات', value: '0 to 10,000 PSI (0 to 700 bar), proof pressure 15,000 PSI', valueAr: 'من 0 إلى 10,000 رطل/بوصة مربعة، وتحمل ضغط حتى 15,000 رطل' },
      { label: 'Pit Level Measuring Range', labelAr: 'نطاق قياس مستوى الحوض', value: '0.3 to 8.0 meters (1 to 26 ft) ultrasonic non-contact', valueAr: 'من 0.3 إلى 8 أمتار بالموجات فوق الصوتية دون تلامس' },
      { label: 'Hook Load Capacity', labelAr: 'قدرة قياس وزن عمود الحفر', value: 'Up to 1,000,000 lbs (450 metric tonnes) deadline tension', valueAr: 'حتى 1,000,000 رطل (450 طن متري) شد على حبل الحفر' },
      { label: 'Electrical Interface', labelAr: 'الواجهة الكهربائية', value: 'Standard loop-powered 4-20mA two-wire with 24VDC excitation', valueAr: 'إشارة 4-20 مللي أمبير بسلكين وتغذية 24 فولت تيار مستمر' },
      { label: 'Operating Temperature', labelAr: 'درجة حرارة التشغيل الميدانية', value: '-30°C to +85°C (-22°F to +185°F) for all outdoor sensor heads', valueAr: '-30 إلى +85 درجة مئوية لكافة رؤوس المجسات الخارجية' },
      { label: 'Enclosure Rating', labelAr: 'تصنيف مقاومة الظروف الخارجية', value: 'IP67 / IP68 submersible sensor bodies with hermetic potted electronics', valueAr: 'حماية IP67 و IP68 مع إلكترونيات معزولة تماماً ضد السوائل' },
      { label: 'Cable Construction', labelAr: 'مواصفات الكابلات', value: 'Steel wire braided polyurethane jacket, chemical and oil resistant', valueAr: 'كابلات مصفحة بجدائل فولاذية وغلاف بولي يوريثان مقاوم للزيوت' },
      { label: 'Certifications', labelAr: 'الشهادات والاعتمادات', value: 'ATEX II 1 G Ex ia IIC T4 Ga (Intrinsically Safe), CE, EGPC Approved', valueAr: 'معتمد للأمان الجوهري ATEX II 1 G Ex ia IIC T4 Ga ومعتمد لدى EGPC' }
    ],
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516197155649-ca2ff10415a6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
    ],
    files: [
      {
        id: 'file-ms-sensors-brochure',
        title: 'Measuresoft Rig Surface Sensors Technical Catalog',
        titleAr: 'الكتالوج الفني لمجسات سطح البريمة من Measuresoft',
        type: 'brochure',
        size: '3.4 MB',
        downloadUrl: '/downloads/measuresoft-rig-sensors-catalog.pdf',
        pageCount: 12
      },
      {
        id: 'file-ms-sensors-manual',
        title: 'Rig Surface Sensors Wiring and Calibration Handbook',
        titleAr: 'كتيب التوصيل والمعايرة لمجسات سطح البريمة',
        type: 'manual',
        size: '4.8 MB',
        downloadUrl: '/downloads/measuresoft-rig-sensors-manual.pdf',
        pageCount: 34
      }
    ],
    atexRating: 'ATEX Zone 0 Intrinsically Safe Ex ia',
    gasTargets: ['Mud Pressure', 'Drilling Depth', 'Pit Volume', 'Pump Strokes', 'Hook Load Tension'],
    targetIndustry: ['Mud Logging Services', 'Drilling Instrumentation', 'Rig Automation Contractors'],
    inStock: true,
    isFeatured: true,
    warrantyMonths: 24
  },
  {
    id: 'ms-cal-gas-h2s-mix',
    slug: 'certified-quad-gas-calibration-cylinder-34l',
    code: 'MS-CAL-Q4-34',
    name: 'Certified Quad-Gas Oilfield Calibration Span Cylinder (34L / 58L)',
    nameAr: 'أسطوانة غازات المعايرة المعتمدة رباعية الغازات للمواقع النفطية 34L',
    brandId: 'measuresoft',
    categoryId: 'calibration-testing',
    subcategoryId: 'sub-cal-cylinders',
    shortDesc: 'NIST-traceable 4-gas calibration mixture (25 ppm H2S, 100 ppm CO, 2.5% Methane LEL, 18.0% O2 in Nitrogen) for daily bump testing and quarterly span certification.',
    shortDescAr: 'خليط غازات المعايرة الرباعي القياسي المعتمد دولياً لمعايرة واختبار كواشف الغازات اليومية والدورية في الحقول والمنصات.',
    description: 'Every safety inspector and drilling supervisor knows that a gas detector is only as reliable as its most recent span calibration. Measuresoft supplies certified, NIST-traceable calibration gas cylinders packaged in lightweight aluminium non-refillable cylinders manufactured specifically for the Middle East and Egyptian oilfield service market. Blended to exact gravimetric tolerances with high-purity analytical balance verification, each cylinder features an individualized batch certification barcode, analysis expiration date, and specialized internal cylinder passivating treatment to prevent aggressive H2S sulfur adherence on the inner walls. Compatible with all standard demand flow regulators, continuous flow regulators, and automated docking stations from Crowcon, Honeywell, MSA, and RAE Systems.',
    descriptionAr: 'يعلم كل مفتش سلامة ومشرف حفر أن كفاءة أجهزة كشف الغاز تتوقف تماماً على دقة آخر عملية معايرة. توفر شركة Measuresoft أسطوانات غاز المعايرة المعتمدة دولياً والمطابقة لمواصفات NIST، المعبأة في أسطوانات ألومنيوم مدمجة وخفيفة الوزن مصممة خصيصاً لسوق الخدمات البترولية في مصر والشرق الأوسط. يتم تصنيع الخليط بأعلى معايير الدقة الوزنية مع معالجة كيميائية خاصة للجدار الداخلي للأسطوانة لمنع التصاق وتفاعل غاز H2S مع المعدن، مما يضمن ثبات تركيز الغاز طوال فترة الصلاحية. تتوافق الأسطوانات مع كافة منظمات الضغط ومحطات المعايرة الآلية العالمية.',
    applications: [
      'Daily bump testing and zero verification of portable multi-gas detectors',
      'Scheduled quarterly span calibration of fixed gas detection heads on rigs',
      'Pre-entry safety checks before confined space vessel or tank cleanouts',
      'Laboratory validation and sensor performance audits in field workshops'
    ],
    applicationsAr: [
      'اختبار الصدمة اليومي والتأكد من استجابة أجهزة كشف الغاز المحمولة',
      'المعايرة الربع سنوية الدورية لحساسات الغاز الثابتة على أبراج الحفر',
      'فحوصات السلامة قبل دخول الأماكن المغلقة وأوعية المعالجة والخزانات',
      'التحقق المعملي واختبار كفاءة الحساسات بورش الصيانة الميدانية'
    ],
    keyFeatures: [
      'NIST-traceable analytical gravimetric certification included with each cylinder',
      'Advanced internal wall passivation eliminates H2S degradation and ensures 24-month stability',
      'Universal 5/8"-18 UNF standard C-10 inlet valve fits all brand regulators',
      'Lightweight recyclable high-strength aluminium cylinder easy to carry up rig ladders',
      'Individual QR code on label links to online Certificate of Analysis (COA) PDF',
      'Fast delivery from Cairo and Suez bonded warehouses directly to rig site'
    ],
    keyFeaturesAr: [
      'شهادة تحليل معملية معتمدة وفق معايير NIST مرفقة مع كل أسطوانة',
      'معالجة داخلية خاصة تمنع تحلل غاز H2S وتضمن استقرار التركيز لمدة 24 شهراً',
      'صمام قياسي عالمي 5/8"-18 UNF متوافق مع كافة منظمات الضغط ومحطات الفحص',
      'أسطوانة ألومنيوم قوية وخفيفة الوزن يسهل حملها وصعود سلالم البريمة بها',
      'رمز QR على ملصق الأسطوانة لتحميل شهادة التحليل المعملية الفورية (COA)',
      'توفر فوري للشحن المباشر من مستودعات القاهرة والسويس إلى مواقع الآبار'
    ],
    includes: [
      'Measuresoft 34L or 58L Aluminium Calibration Gas Cylinder',
      'Original Certificate of Analysis (COA) with serialized batch number',
      'Protective valve transport safety cap',
      'Safety Data Sheet (MSDS) in English and Arabic',
      'Hazardous material transport packaging'
    ],
    includesAr: [
      'أسطوانة غاز معايرة ألومنيوم سعة 34 لتر أو 58 لتر معبأة بالخليط المطلوب',
      'شهادة التحليل المعملية الأصلية (COA) برقم التشغيلة المتسلسل',
      'غطاء حماية الصمام أثناء النقل والشحن الميداني',
      'صحيفة بيانات سلامة المادة (MSDS) باللغتين الإنجليزية والعربية',
      'تغليف أمان مخصص للمواد والغازات المضغوطة'
    ],
    specs: [
      { label: 'Gas Mixture Formula', labelAr: 'تركيبة خليط الغاز', value: '25 ppm H2S, 100 ppm CO, 2.5% Methane (50% LEL), 18.0% O2, Balance Nitrogen', valueAr: '25 جزء/مليون H2S، و 100 CO، و 2.5% ميثان (50% LEL)، و 18% أكسجين، والنيتروجين مكمل' },
      { label: 'Cylinder Capacity & Pressure', labelAr: 'سعة الأسطوانة والضغط', value: '34 Litres at 500 PSI (34.5 bar) / 58 Litres at 500 PSI', valueAr: '34 لتر عند ضغط 500 PSI، أو 58 لتر عند 500 PSI' },
      { label: 'Valve Connection', labelAr: 'مواصفة صمام الخروج', value: 'Standard C-10 valve (5/8" - 18 UNF thread)', valueAr: 'صمام C-10 القياسي (5/8 بوصة - 18 سن)' },
      { label: 'Shelf Life & Stability', labelAr: 'فترة الصلاحية والاستقرار', value: '24 months from filling date (guaranteed analytical stability)', valueAr: '24 شهراً من تاريخ التعبئة باستقرار تحليلي مضمون' },
      { label: 'Cylinder Dimensions', labelAr: 'أبعاد الأسطوانة', value: '280 mm height x 76 mm diameter, weight 0.45 kg empty / 0.65 kg full', valueAr: 'ارتفاع 280 مم × قطر 76 مم، والوزن 0.65 كجم' },
      { label: 'Standards & Traceability', labelAr: 'معايير التتبع المعملي', value: 'NIST Standards, ISO 6142, DOT 39 specification', valueAr: 'معايير NIST، وتوافق مع ISO 6142 ومواصفات DOT 39' }
    ],
    images: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
    ],
    files: [
      {
        id: 'file-cal-gas-brochure',
        title: 'Certified Calibration Gas Specifications & Gas Mix Guide',
        titleAr: 'دليل مواصفات وخلطات غازات المعايرة المعتمدة',
        type: 'datasheet',
        size: '1.4 MB',
        downloadUrl: '/downloads/measuresoft-cal-gas-datasheet.pdf',
        pageCount: 4
      },
      {
        id: 'file-cal-gas-msds',
        title: 'Quad-Gas Material Safety Data Sheet (MSDS / SDS)',
        titleAr: 'صحيفة بيانات سلامة المادة للغاز الرباعي MSDS',
        type: 'certificate',
        size: '1.9 MB',
        downloadUrl: '/downloads/quad-gas-sds-certificate.pdf',
        pageCount: 8
      }
    ],
    atexRating: 'Non-Flammable Compressed Gas (UN 1956)',
    gasTargets: ['H2S (25 ppm)', 'CO (100 ppm)', 'Methane CH4 (2.5%)', 'Oxygen O2 (18.0%)'],
    targetIndustry: ['All Drilling Rigs', 'Oil Storage Depots', 'Offshore Platforms', 'Maintenance Workshops'],
    inStock: true,
    isFeatured: false,
    warrantyMonths: 24
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'advanced-hydrocarbon-extraction-deepwater-mudlogging',
    title: 'Advanced Total Hydrocarbon Extraction in Deepwater Mud Logging Operations',
    titleAr: 'التقنيات المتقدمة لاستخلاص الهيدروكربونات الكلية في عمليات تسجيل الحفر بالمياه العميقة',
    excerpt: 'How modern pneumatic agitation and heated gas transfer systems solve sample condensation and improve gas ratio accuracy in offshore Mediterranean drilling.',
    excerptAr: 'كيف تساهم أنظمة التقليب الهوائي الحديثة وخطوط النقل الحرارية في منع تكاثف العينات وتحسين دقة نسب الغازات في حقول البحر المتوسط.',
    content: `In offshore exploration environments such as the deepwater Nile Delta and Mediterranean gas fields, drilling mud encounters extreme hydrostatic pressures and temperature gradients as it circulates from the drill bit back to surface. 

Traditional passive shale shaker gas traps often experience high condensation rates, erratic fluid flow surges, and significant loss of heavier hydrocarbon fractions (C3 to C5). This compromises the integrity of gas-while-drilling data and can conceal critical formation gas shows.

By deploying positive-displacement pneumatic degassers like the Measuresoft PDEG-500, field engineers ensure constant sample agitation regardless of mud rheology or fluid level variations in the shaker possum belly. When combined with heated transfer lines maintained at 85°C to 110°C, volatile hydrocarbons are transported to the FID analyzer without premature phase drops or moisture droplet blockage.

Key operational recommendations:
1. Always position the gas extractor in the primary return flow stream before the first shaker screen to capture formation gases before surface atmospheric aeration.
2. Maintain sample line vacuum between 0.2 and 0.4 bar to ensure continuous flow without drawing liquid mud into the primary conditioning coalescing filter.
3. Conduct span calibrations every 72 drilling hours using certified NIST-traceable multi-component hydrocarbon gases.`,
    contentAr: `في بيئات الاستكشاف البحري مثل حقول دلتا النيل العميقة ومكامن الغاز بالبحر الأبيض المتوسط، يتعرض سائل الحفر لتغيرات هائلة في الضغط الهيدروستاتيكي ودرجات الحرارة أثناء دورانه من قاع البئر إلى السطح.

غالباً ما تعاني مصائد الغاز التقليدية من تكاثف شديد لقطرات الماء وفقدان أجزاء الهيدروكربونات الثقيلة (C3 حتى C5)، مما يؤثر سلباً على دقة بيانات الغازات اللحظية وقد يؤدي إلى إغفال شواهد بترولية هامة في الطبقات الجيولوجية.

إن استخدام مستخلصات الغاز الميكانيكية الهوائية يضمن تقليباً مستمراً وعالي الكفاءة لسائل الحفر بصرف النظر عن لزوجة الطفلة أو تغيرات منسوبها. وعند اقتران ذلك بخطوط نقل عينات مسخنة كهربائياً، تنتقل الغازات الهيدروكربونية إلى أجهزة التحليل FID دون أي فقد بالمكثفات أو انسداد بالفلاتر.

أهم التوصيات التشغيلية الميدانية:
1. تثبيت مستخلص الغاز دائماً في حوض رجوع الطفلة الرئيسي قبل وصول السائل إلى المناخل لتفادي تطاير الغازات في الهواء.
2. الحفاظ على ضغط سحب تفريغي متزن لمنع سحب رذاذ الطين داخل فلاتر التنقية.
3. إجراء معايرة دورية كل 72 ساعة حفر باستخدام أسطوانات غازات قياسية معتمدة.`,
    category: 'Mud Logging Technology',
    categoryAr: 'تكنولوجيا تسجيل الحفر',
    author: 'Eng. Tamer Radwan',
    authorRole: 'Chief Petroleum Instrumentation Specialist',
    date: '2026-08-14',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516197155649-ca2ff10415a6?auto=format&fit=crop&w=800&q=80',
    tags: ['Mud Logging', 'Hydrocarbons', 'Offshore', 'Drilling Safety']
  },
  {
    id: 'post-2',
    slug: 'atex-zone-0-vs-zone-1-h2s-rig-detection',
    title: 'ATEX Zone 0 vs Zone 1: Selecting Fixed H2S Detectors for Gulf of Suez Rigs',
    titleAr: 'مقارنة تصنيف ATEX للمنطقة 0 والمنطقة 1: اختيار كواشف غاز H2S لمنصات خليج السويس',
    excerpt: 'Crucial engineering guidelines on classifying hazardous locations on drilling rigs and ensuring sensor ingress protection against severe offshore salt mist.',
    excerptAr: 'إرشادات هندسية أساسية لتصنيف المناطق الخطرة على منصات الحفر واختيار درجات الحماية المناسبة ضد رذاذ الأملاح البحرية وغاز H2S.',
    content: `Sour gas reservoirs across the Gulf of Suez and Western Desert present some of the most challenging operating environments in the upstream oil and gas sector. Hydrogen Sulfide (H2S) is both lethal at low concentrations and intensely corrosive to standard electronics.

When specifying fixed gas detectors for rig floor operations, understanding the difference between ATEX Zone 0, Zone 1, and Zone 2 is a regulatory and life-safety necessity under EGPC guidelines.

Zone 0 areas (such as inside mud tanks and active shaker hoods where explosive or toxic atmospheres exist continuously) mandate intrinsically safe (Ex ia) instrumentation. Zone 1 areas (including the immediate rig cellar, bell nipple, and rig floor within 3 meters of the rotary table) typically employ flameproof (Ex d) or increased safety (Ex e) designs.

Corrosion protection considerations:
Standard cast iron or cheap aluminium housings will suffer severe galvanic degradation within 6 to 12 months in the marine environment of Suez. For long-term reliability, Measuresoft specifies marine-grade 316 Stainless Steel transmitter bodies with IP66/IP67 seals and hydrophobic splash guards.`,
    contentAr: `تعتبر مكامن الغازات الحامضية في خليج السويس والصحراء الغربية من أكثر البيئات التشغيلية تحدياً لقطاع البترول. فغاز كبريتيد الهيدروجين (H2S) شديد السمية بتركيزات منخفضة ومسبب لتآكل شديد في الدوائر الإلكترونية.

عند تحديد مواصفات كواشف الغاز الثابتة على أرضية البريمة، فإن فهم الفارق الدقيق بين تصنيفات ATEX للمنطقة 0 والمنطقة 1 والمنطقة 2 يعد ضرورة تشريعية وإلزامية لسلامة الأرواح وفق لوائح الهيئة المصرية العامة للبترول.

تتطلب المنطقة 0 (مثل داخل أحواض الطفلة المغلقة وأغطية مناخل الشيل شيكر حيث تتواجد الغازات باستمرار) أجهزة ذات أمان جوهري فائق (Ex ia). بينما تتطلب المنطقة 1 (مثل قاع البريمة وأرضية الحفر حول الطاولة الدوارة) أجهزة مقاومة للانفجار بمعيار Ex d.

معايير الحماية من التآكل:
إن الهياكل العادية تتعرض للتآكل السريع خلال أشهر معدودة بفعل أملاح البحر ورطوبة السويس، لذا تحرص Measuresoft على توفير أجهزة مصنوعة من الفولاذ المقاوم للصدأ 316 مع حماية IP66/IP67 وأغطية صد الرذاذ المائي.`,
    category: 'Safety & H2S Compliance',
    categoryAr: 'السلامة والامتثال لمخاطر H2S',
    author: 'Eng. Ahmed El-Sayed',
    authorRole: 'QHSE & Gas Detection Director',
    date: '2026-07-28',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    tags: ['ATEX', 'H2S Safety', 'Offshore Rig', 'Suez']
  },
  {
    id: 'post-3',
    slug: 'bump-testing-vs-calibration-oilfield-protocol',
    title: 'Bump Testing vs. Full Span Calibration: Why Drilling Teams Need Both',
    titleAr: 'اختبار الصدمة اليومي مقابل المعايرة الشاملة: لماذا تحتاج فرق الحفر لكليهما؟',
    excerpt: 'Clarifying the critical differences between a 30-second challenge test and a full laboratory span recalibration to maintain zero-incident safety records.',
    excerptAr: 'توضيح الفروق الجوهرية بين اختبار الاستجابة السريع والمعايرة المعملية الدقيقة لضمان عدم وقوع حوادث بالمنشآت النفطية.',
    content: `A common safety finding during rig audits is the misconception that performing a quick daily bump test is synonymous with calibrating a gas detector. This confusion can lead to catastrophic sensor drift in sour wells.

A bump test is a brief qualitative exposure to a target gas mix to verify that the sensor responds, the display registers an elevation, and the audio-visual alarms activate properly. It should take less than 30 seconds and must be conducted prior to every work shift or confined space entry.

In contrast, a full span calibration is a quantitative adjustment of the instrument's electronic amplifier circuit to align its digital readout precisely with a certified reference gas concentration. This corrects for chemical sensor degradation, temperature drift, and poison coating over time.

Measuresoft recommends:
- Daily bump testing for all personal 4-gas and PID monitors.
- Full span calibration every 30 days for continuous rig perimeter sensors and every 90 days for portable equipment.
- Immediate recalibration after any exposure to high gas concentrations exceeding 100% full scale.`,
    contentAr: `من الملاحظات المتكررة في مراجعات السلامة على أجهزة الحفر الخلط بين اختبار الصدمة السريع (Bump Test) والمعايرة الشاملة للحساسات (Span Calibration). هذا الخلط قد يتسبب في انحراف خطير بقراءات الغازات السامة.

اختبار الصدمة هو تعريض الحساس سريعاً لغاز معروف للتأكد من استجابة الدائرة الكهربائية وعمل صافرات الإنذار والوميض، ويجب تنفيذه يومياً قبل بداية كل وردية عمل أو دخول الأماكن المحصورة.

أما المعايرة الشاملة فهي ضبط رقمي لحسابات الحساس ومطابقتها التامة مع تركيز غاز قياسي معتمد، لمعالجة التغيرات الطبيعية في كيمياء الحساس وتأثيرات الحرارة والرطوبة.

توصيات Measuresoft:
- إجراء اختبار الصدمة يومياً لكافة الأجهزة المحمولة.
- معايرة شاملة كل 30 يوماً لكواشف البريمة الثابتة، وكل 90 يوماً للأجهزة المحمولة.
- إعادة معايرة فورية للجهاز في حال تعرضه لتركيزات غاز تفوق أقصى مدى قياس.`,
    category: 'Maintenance & Metrology',
    categoryAr: 'الصيانة والمعايرة القياسية',
    author: 'Khaled Mansour',
    authorRole: 'Head of Measuresoft Calibration Laboratory',
    date: '2026-06-19',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    tags: ['Calibration', 'Bump Test', 'Maintenance', 'Gas Monitors']
  }
];

export const INITIAL_BRANCHES: Branch[] = [
  {
    id: 'cairo-hq',
    city: 'Cairo',
    cityAr: 'القاهرة',
    country: 'Egypt',
    countryAr: 'مصر',
    title: 'Measuresoft Egypt Head Office & Engineering Center',
    titleAr: 'المقر الرئيسي ومركز الهندسة لشركة Measuresoft مصر',
    address: 'Plot 18, Sector 1, Industrial Area, Fifth Settlement, New Cairo, Cairo, Egypt',
    addressAr: 'قطعة 18، القطاع الأول، المنطقة الصناعية، التجمع الخامس، القاهرة الجديدة، مصر',
    phone: '+20 2 2813 4900',
    emergencyPhone: '+20 100 554 9821',
    email: 'info@measuresofteg.com',
    coordinates: {
      lat: 30.0131,
      lng: 31.4913
    },
    services: [
      'Executive Management & Upstream Sales',
      'Mud Logging Systems Engineering & Assembly',
      'Primary NIST-Traceable Calibration Laboratory',
      'Engineering Training & Client Certification Center',
      'Spare Parts Central Bonded Logistics Hub'
    ],
    servicesAr: [
      'الإدارة العامة ومبيعات قطاع البترول والغاز',
      'هندسة وتجميع أنظمة تسجيل سائل الحفر',
      'المعمل الرئيسي للمعايرة القياسية المعتمدة',
      'مركز التدريب الهندسي وتأهيل الكوادر الفنية',
      'المستودع المركزي لقطع الغيار والمعدات الجاهزة'
    ],
    isHQ: true
  },
  {
    id: 'suez-base',
    city: 'Suez',
    cityAr: 'السويس',
    country: 'Egypt',
    countryAr: 'مصر',
    title: 'Suez Operational Base & Marine Calibration Workshop',
    titleAr: 'قاعدة العمليات الميدانية وورشة المعايرة البحرية بالسويس',
    address: 'Free Zone Logistics Hub, Port Tawfik, Suez, Egypt',
    addressAr: 'المنطقة الحرة اللوجستية، بور توفيق، السويس، مصر',
    phone: '+20 62 334 1180',
    emergencyPhone: '+20 100 554 9822',
    email: 'suez.operations@measuresofteg.com',
    coordinates: {
      lat: 29.9575,
      lng: 32.5599
    },
    services: [
      '24/7 Red Sea & Gulf of Suez Offshore Mobilization',
      'Rapid Cylinder Refilling & Span Gas Dispatch',
      'Emergency Rig Site H2S Technician Mobilization',
      'Heavy Mechanical Shaker Degasser Overhauls',
      'Marine Ingress Inspection & Hydrostatic Testing'
    ],
    servicesAr: [
      'دعم ميداني 24/7 لمنصات البحر الأحمر وخليج السويس',
      'إمداد فوري بأسطوانات غازات المعايرة وشحنها للمنصات',
      'إيفاد فنيي طوارئ أنظمة H2S إلى مواقع الحفر البحرية',
      'صيانة وعمرة مستخلصات الغاز ومعدات الحفر الميكانيكية',
      'فحوصات العزل البحري والاختبارات الهيدروستاتيكية'
    ]
  },
  {
    id: 'usa-houston',
    city: 'Houston',
    cityAr: 'هيوستن',
    country: 'USA',
    countryAr: 'الولايات المتحدة',
    title: 'Measuresoft International Sourcing & Technology Office',
    titleAr: 'مكتب التوريد والتكنولوجيا الدولي بهيوستن',
    address: '10777 Westheimer Rd, Suite 1100, Energy Corridor, Houston, TX 77042, United States',
    addressAr: '10777 طريق ويستهايمر، ممر الطاقة، هيوستن، تكساس، الولايات المتحدة',
    phone: '+1 (713) 489-3280',
    emergencyPhone: '+1 (713) 489-3289',
    email: 'usa.office@measuresofteg.com',
    coordinates: {
      lat: 29.7369,
      lng: -95.5645
    },
    services: [
      'Direct Petroleum OEM Sourcing & Supply Chain',
      'Advanced Sensor Research & Prototype Validation',
      'API & IEC Standards Alignment Coordination',
      'North American Engineering Procurement'
    ],
    servicesAr: [
      'التوريد المباشر من كبرى الشركات المصنعة لمعدات البترول',
      'أبحاث وتطوير مجسات الحفر الحديثة واختبار النماذج',
      'التنسيق الفني ومطابقة معايير معهد البترول الأمريكي API',
      'المشتريات الهندسية من السوق الأمريكي'
    ]
  },
  {
    id: 'europe-aberdeen',
    city: 'Aberdeen',
    cityAr: 'أبردين',
    country: 'United Kingdom',
    countryAr: 'المملكة المتحدة',
    title: 'Measuresoft European Technical Liaison Hub',
    titleAr: 'مركز الدعم والتنسيق الفني الأوروبي بأبردين',
    address: 'Kirkhill Commercial Park, Dyce, Aberdeen AB21 0GQ, Scotland, United Kingdom',
    addressAr: 'مجمع كيركهيل الصناعي، دايس، أبردين، اسكتلندا، المملكة المتحدة',
    phone: '+44 1224 980 440',
    emergencyPhone: '+44 1224 980 449',
    email: 'europe@measuresofteg.com',
    coordinates: {
      lat: 57.2069,
      lng: -2.2033
    },
    services: [
      'North Sea Offshore Instrumentation Support',
      'ATEX Directive Compliance & CE Metrology Audits',
      'European Spare Parts Expedited Air Freight',
      'International Mud Logging Software Interfacing'
    ],
    servicesAr: [
      'دعم أجهزة ومعدات حقول بحر الشمال البترولية',
      'مراجعة وتوثيق شهادات ATEX والمعايير الأوروبية CE',
      'شحن جوي سريع لقطع الغيار الحساسة من أوروبا لمصر',
      'تطوير برمجيات تسجيل الحفر والربط الشبكي WITSml'
    ]
  }
];

export const BRANCHES = INITIAL_BRANCHES;

export const INITIAL_JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Petroleum Instrumentation & Mud Logging Engineer',
    titleAr: 'مهندس أول أجهزة قياس بترولية وتسجيل سائل الحفر',
    department: 'Field Operations & Rig Services',
    departmentAr: 'العمليات الميدانية وخدمات منصات الحفر',
    location: 'Cairo / Suez / Offshore Gulf of Suez',
    locationAr: 'القاهرة / السويس / منصات خليج السويس',
    type: 'Full-time / Rig Rotation',
    experience: '4 - 7 Years in Oil & Gas',
    description: 'We are seeking an experienced petroleum or electronics engineer to lead field commissioning, sensor calibration, and FID gas analyzer troubleshooting on onshore and offshore drilling rigs across Egypt.',
    descriptionAr: 'نبحث عن مهندس بترول أو إلكترونيات ذو خبرة لتولي مهام التركيب الميداني ومعايرة المجسات وصيانة محللات الغاز FID على منصات الحفر البرية والبحرية بمصر.',
    requirements: [
      'B.Sc. in Petroleum, Electronics, Mechatronics, or Instrumentation Engineering',
      'Minimum 4 years direct experience with Mud Logging units and rig surface sensors',
      'Valid BOSIET / HUET offshore survival certification for Gulf of Suez operations',
      'Thorough knowledge of Modbus, 4-20mA instrumentation loops, and WITS Level 0 data streams',
      'Fluent technical English and Arabic communication skills'
    ],
    requirementsAr: [
      'بكالوريوس هندسة بترول أو إلكترونيات أو ميكاترونكس أو أجهزة دقيقة',
      'خبرة لا تقل عن 4 سنوات في وحدات تسجيل سائل الحفر ومجسات البريمة',
      'شهادة نجاة بحرية سارية BOSIET للعمل في المنصات البحرية',
      'معرفة متعمقة ببروتوكولات Modbus ودوائر 4-20mA وتدفق بيانات WITS',
      'إجادة تامة للغة الإنجليزية التقنية والعربية'
    ]
  },
  {
    id: 'job-2',
    title: 'Gas Detection Calibration Specialist & Lab Technician',
    titleAr: 'أخصائي معايرة كواشف الغازات وفني معمل معتمد',
    department: 'Metrology & Quality Assurance Laboratory',
    departmentAr: 'معمل القياس والمعايرة وضمان الجودة',
    location: 'New Cairo Headquarters, Egypt',
    locationAr: 'المقر الرئيسي بالقاهرة الجديدة، مصر',
    type: 'Full-time (On-site)',
    experience: '2 - 4 Years',
    description: 'Responsible for precision span calibration, sensor replacement, bump testing verification, and issuing NIST-traceable calibration certificates for Crowcon, Honeywell, and Measuresoft gas detectors.',
    descriptionAr: 'المسؤولية عن معايرة كواشف الغازات بدقة واستبدال الحساسات التالفة وإجراء اختبارات الفحص وإصدار شهادات المعايرة المعتمدة دولياً لكواشف الغاز.',
    requirements: [
      'Degree or Diploma in Electrical, Chemical, or Mechanical Instrumentation',
      'Direct laboratory experience with toxic gas cylinders, regulators, and electrochemical sensors',
      'Familiarity with ISO 9001 quality documentation and certificate generation',
      'High attention to detail and zero-tolerance safety mindset'
    ],
    requirementsAr: [
      'مؤهل هندسي أو دبلوم فني في الأجهزة الدقيقة أو الكهرباء أو الكيمياء',
      'خبرة عملية مع أسطوانات الغازات السامة ومنظمات الضغط والحساسات الكهروكيميائية',
      'معرفة بإجراءات التوثيق وفق معايير الجودة ISO 9001 وإصدار الشهادات',
      'دقة متناهية والتزام صارم بإجراءات السلامة المعملية'
    ]
  },
  {
    id: 'job-3',
    title: 'Technical B2B Sales Engineer - Petroleum Equipment',
    titleAr: 'مهندس مبيعات فنية B2B لمعدات قطاع البترول والغاز',
    department: 'Commercial & Key Account Management',
    departmentAr: 'الإدارة التجارية وإدارة كبار العملاء',
    location: 'Cairo, Egypt (with travel to Egyptian Oilfield Joint Ventures)',
    locationAr: 'القاهرة، مصر (مع زيارات ميدانية للشركات المشتركة)',
    type: 'Full-time',
    experience: '3 - 6 Years in Petroleum Equipment Sales',
    description: 'Lead commercial proposals, tender submissions, and client relationship management for major petroleum joint ventures (Petrobel, GUPCO, Khalda, BAPETCO) and international drilling contractors.',
    descriptionAr: 'قيادة العروض التجارية والمناقصات وإدارة العلاقات مع كبرى شركات البترول المشتركة وشركات الحفر العالمية العاملة في مصر.',
    requirements: [
      'Engineering degree with strong commercial acumen in the Egyptian energy sector',
      'Demonstrated track record supplying safety instruments or drilling tools to EGPC entities',
      'Outstanding negotiation, RFQ preparation, and client presentation abilities',
      'Valid driving license and ability to visit field bases in Suez and Western Desert'
    ],
    requirementsAr: [
      'مؤهل هندسي مع خبرة تجارية متميزة في قطاع الطاقة المصري',
      'سجل أعمال مثبت في توريد أجهزة السلامة أو معدات الحفر للشركات التابعة للهيئة',
      'مهارات تفاوض وإعداد عروض أسعار (RFQ) وعروض تقديمية رفيعة المستوى',
      'رخصة قيادة سارية والقدرة على زيارة القواعد الميدانية في السويس والصحراء الغربية'
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: 'Petrobel (Belayim Petroleum)', logo: 'Petrobel', origin: 'Egypt / ENI JV' },
  { name: 'Khalda Petroleum Company', logo: 'Khalda', origin: 'Apache / EGPC JV' },
  { name: 'GUPCO (Gulf of Suez Petroleum)', logo: 'GUPCO', origin: 'Dragon Oil / EGPC JV' },
  { name: 'BAPETCO (Badr Petroleum)', logo: 'BAPETCO', origin: 'Shell / EGPC JV' },
  { name: 'Agiba Petroleum Company', logo: 'Agiba', origin: 'ENI / EGPC JV' },
  { name: 'Qarun Petroleum Company', logo: 'Qarun', origin: 'Western Desert Operator' },
  { name: 'SLB (Schlumberger)', logo: 'SLB', origin: 'Global Drilling Services' },
  { name: 'Baker Hughes', logo: 'Baker Hughes', origin: 'Energy Technology Provider' },
  { name: 'Weatherford International', logo: 'Weatherford', origin: 'Drilling & Surface Logging' }
];

export const QHSE_POLICIES = {
  vision: 'Zero Incidents, Zero Harm, Zero Environmental Impact',
  visionAr: 'صفر حوادث، صفر إصابات، صفر تأثير بيئي',
  commitments: [
    'Strict adherence to EGPC (Egyptian General Petroleum Corporation) and IADC environmental safety standards across all rig activities.',
    'Unconditional Stop Work Authority (SWA) granted to every Measuresoft field engineer and technician without fear of operational retribution.',
    'NIST-traceable calibration integrity ensuring all gas detection warnings activate with 100% precision when hazardous thresholds are crossed.',
    'Continuous professional training with accredited BOSIET, H2S Awareness, and Rig Safety Passport certifications for all field personnel.',
    'ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified management processes across Cairo laboratories and Suez field stations.'
  ],
  commitmentsAr: [
    'الالتزام الصارم بمعايير الهيئة المصرية العامة للبترول (EGPC) والاتحاد الدولي لمقاولي الحفر (IADC).',
    'منح سلطة إيقاف العمل (Stop Work Authority) لكافة مهندسي وفنيي الشركة دون أي تبعات عند رصد أي خطر.',
    'ضمان دقة معايرة أجهزة كشف الغازات بنسبة 100% وفق معايير NIST العالمية لحماية الأرواح.',
    'تدريب وتأهيل مستمر للكوادر الميدانية وحصولهم على شهادات BOSIET وشهادات مكافحة غاز H2S.',
    'تطبيق منظومات الجودة والسلامة والبيئة المعتمدة بشهادات ISO 9001 و ISO 14001 و ISO 45001.'
  ],
  certifications: [
    { title: 'ISO 9001:2015', subtitle: 'Quality Management Systems', number: 'EG-QMS-2024-8841', issuer: 'TUV / EGAC Accredited' },
    { title: 'ISO 14001:2015', subtitle: 'Environmental Management', number: 'EG-EMS-2024-9120', issuer: 'TUV / EGAC Accredited' },
    { title: 'ISO 45001:2018', subtitle: 'Occupational Health & Safety', number: 'EG-OHSAS-2024-4419', issuer: 'TUV / EGAC Accredited' },
    { title: 'EGPC Vendor Approval', subtitle: 'Instrumentation & Gas Detection', number: 'EGPC-SUP-77291', issuer: 'Egyptian General Petroleum Corp' }
  ]
};
