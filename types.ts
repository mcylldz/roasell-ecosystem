import { ReactNode } from 'react';

export interface StatItem {
  label: string;
  value: string;
  numberValue: number;
  prefix?: string;
  suffix?: string;
  trend?: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  type: 'whatsapp' | 'video' | 'audio' | 'story' | 'result';
  content?: string;
  image?: string;
  thumbnail?: string;
  title?: string;
  resultValue?: string;
  verified?: boolean;
  videoSrc?: string; // URL for iframe
  platform?: 'youtube' | 'vimeo';
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface BrandLogo {
  name: string;
  image?: string;
  url?: string;
  className?: string;
}