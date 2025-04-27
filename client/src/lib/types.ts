export interface University {
  name: string;
  description: string;
  badge: string;
  image: string;
}

export interface Testimonial {
  name: string;
  origin: string;
  university: string;
  image: string;
  rating: number;
  testimonial: string;
}

export interface Statistic {
  value: number;
  label: string;
  suffix?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  program: string;
  message?: string;
}
