export type Language = 'en' | 'ar';

export type QuoteStatus = 'new' | 'reviewed' | 'quoted' | 'closed';

export type FileType = 'brochure' | 'manual' | 'certificate' | 'datasheet';

export interface ProductFile {
  id: string;
  title: string;
  titleAr: string;
  type: FileType;
  size: string;
  downloadUrl: string;
  pageCount: number;
}

export interface ProductSpec {
  label: string;
  labelAr: string;
  value: string;
  valueAr: string;
}

export interface Product {
  id: string;
  slug: string;
  code: string;
  name: string;
  nameAr: string;
  brandId: string;
  categoryId: string;
  subcategoryId: string;
  shortDesc: string;
  shortDescAr: string;
  description: string;
  descriptionAr: string;
  applications: string[];
  applicationsAr: string[];
  keyFeatures: string[];
  keyFeaturesAr: string[];
  includes: string[];
  includesAr: string[];
  specs: ProductSpec[];
  images: string[];
  files: ProductFile[];
  atexRating: string;
  gasTargets: string[];
  targetIndustry: string[];
  inStock: boolean;
  isFeatured: boolean;
  warrantyMonths: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  iconName: string;
  image: string;
}

export interface Subcategory {
  id: string;
  categoryId: string;
  slug: string;
  name: string;
  nameAr: string;
}

export interface Brand {
  id: string;
  name: string;
  origin: string;
  logo: string;
  description: string;
  descriptionAr: string;
}

export interface QuoteCartItem {
  product: Product;
  quantity: number;
  projectNote?: string;
  targetGas?: string;
}

export interface QuoteRequest {
  id: string;
  quoteNumber: string;
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  rigOrProjectLocation: string;
  urgency: 'immediate' | '1-2_weeks' | '1_month' | 'planning_budget';
  additionalNotes: string;
  items: {
    productId: string;
    productName: string;
    productCode: string;
    quantity: number;
    targetGas?: string;
    projectNote?: string;
  }[];
  status: QuoteStatus;
  submittedAt: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  category: string;
  categoryAr: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Branch {
  id: string;
  city: string;
  cityAr: string;
  country: string;
  countryAr: string;
  title: string;
  titleAr: string;
  address: string;
  addressAr: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];
  servicesAr: string[];
  isHQ?: boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  titleAr: string;
  department: string;
  departmentAr: string;
  location: string;
  locationAr: string;
  type: string;
  experience: string;
  description: string;
  descriptionAr: string;
  requirements: string[];
  requirementsAr: string[];
}
