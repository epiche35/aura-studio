export type ServiceCategory = 'all' | 'hair' | 'grooming' | 'color' | 'beauty';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  priceNpr: number;
  isStartingPrice?: boolean;
  duration: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

export type GalleryCategory = 'all' | 'haircuts' | 'styling' | 'grooming' | 'color' | 'interior' | 'beauty';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
  description: string;
}

export interface ReviewItem {
  id: string;
  reviewerAlias: string;
  clientBadge: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
}

export interface BookingRequest {
  fullName: string;
  phoneNumber: string;
  serviceId: string;
  serviceName: string;
  servicePrice: string;
  preferredDate: string;
  preferredTime: string;
  stylist: string;
  voucherCode?: string;
  notes?: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
}
