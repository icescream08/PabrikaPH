export interface User {
  id: string;
  email: string;
  full_name: string;
  phone: string | null;
  role: 'buyer' | 'manufacturer' | 'admin';
  profile_picture_url: string | null;
  is_email_verified: boolean;
  created_at: string;
}

export interface Manufacturer {
  id: string;
  user_id: string;
  company_name: string;
  slug: string;
  logo_url: string | null;
  cover_image_url: string | null;
  short_description: string | null;
  full_description: string | null;
  business_address: string;
  city: string;
  province: string;
  postal_code: string | null;
  business_type: string;
  primary_category: string;
  secondary_categories: string[] | null;
  moq_description: string | null;
  production_capacity: string | null;
  contact_email: string;
  contact_phone: string;
  verification_status: 'pending' | 'verified' | 'rejected' | 'suspended';
  verification_completed_at: string | null;
  is_featured: boolean;
  is_premium: boolean;
  view_count: number;
  inquiry_count: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  manufacturer_id: string;
  product_name: string;
  category: string;
  description: string | null;
  moq_quantity: number | null;
  moq_unit: string | null;
  price_range_min: number | null;
  price_range_max: number | null;
  image_url: string | null;
  is_available: boolean;
  created_at: string;
}

export interface Inquiry {
  id: string;
  buyer_id: string;
  manufacturer_id: string;
  product_id: string | null;
  message: string;
  quantity_needed: number | null;
  estimated_budget: number | null;
  buyer_company_name: string | null;
  buyer_contact_email: string;
  buyer_contact_phone: string;
  status: 'sent' | 'viewed' | 'replied' | 'closed';
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon_url: string | null;
  is_active: boolean;
  created_at: string;
}
