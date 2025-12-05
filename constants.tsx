import {
  BarChart3,
  Truck,
  CreditCard,
  Scale,
  Users,
  Target
} from 'lucide-react';
import { StatItem, FeatureItem, TestimonialItem, BrandLogo } from './types';

export const BRANDS: BrandLogo[] = [
  { name: 'Lamborghini', image: '/assets/brands/brand-2.png' },
  { name: 'Seedify', image: '/assets/brands/brand-3.png' },
  { name: 'WestWing', image: '/assets/brands/brand-4.png' },
  { name: 'Atasay', image: '/assets/brands/brand-5.png' },
  { name: 'Inkbox', image: '/assets/brands/brand-inkbox.png', className: 'h-5 md:h-7' }
];

export const STATS: StatItem[] = [
  { label: 'TOPLAM HACİM', value: '208.394.388', prefix: '₺', trend: 12 },
  { label: 'ORTALAMA SİPARİŞ TUTARI', value: '2.122', prefix: '₺', trend: 5 },
  { label: 'TOPLAM SİPARİŞ', value: '105.409', trend: 8 },
  { label: 'ORTALAMA ROAS', value: '4,90', trend: -2 }
];

export const FEATURES: FeatureItem[] = [
  {
    title: 'Veri Odaklı Kararlar',
    description: 'Gerçek zamanlı analytics ile hislerinize değil, verilere güvenerek büyüyün.',
    icon: <BarChart3 className="w-6 h-6 text-roasell-gold" />
  },
  {
    title: 'Entegre Tedarik',
    description: 'Dünyanın dört bir yanındaki güvenilir tedarikçi ağına anında erişim.',
    icon: <Truck className="w-6 h-6 text-roasell-gold" />
  },
  {
    title: 'Ödeme Altyapısı',
    description: 'Global pazarlarda geçerli, sorunsuz çoklu ödeme seçenekleri.',
    icon: <CreditCard className="w-6 h-6 text-roasell-gold" />
  },
  {
    title: 'Legal Destek',
    description: 'Şirket kurulumundan ödeme yöntemi entegrasyonuna kadar tam yasal uyumluluk.',
    icon: <Scale className="w-6 h-6 text-roasell-gold" />
  },
  {
    title: 'Ortaklık Modeli',
    description: 'Sadece bir altyapı değil, büyüdükçe kazandıran bir ekosistem ortağı.',
    icon: <Users className="w-6 h-6 text-roasell-gold" />
  },
  {
    title: 'Nokta Atışı Destek',
    description: 'Size özel atanan uzmanlarla kişiselleştirilmiş büyüme yol haritası.',
    icon: <Target className="w-6 h-6 text-roasell-gold" />
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'halil',
    name: 'Halil Bey',
    type: 'video',
    title: 'Halil Aydın Başarı Videosu',
    videoSrc: 'https://player.vimeo.com/video/1057536719?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479',
    platform: 'ROASELL'
  },
  {
    id: 'sude',
    name: 'Sude Hanım',
    type: 'video',
    title: 'Sude Hanım Başarı Hikayesi',
    videoSrc: 'https://player.vimeo.com/video/1057483311?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479',
    platform: 'ROASELL'
  },
  {
    id: 'oguzhan',
    name: 'Oğuzhan Bey',
    type: 'video',
    title: '82 Günde Marka Kurduk',
    videoSrc: 'https://www.youtube.com/embed/T4n_KuX1PwA?si=u0Xm7mRdqPpiKgi6',
    platform: 'ROASELL',
    resultValue: '₺703.919,78'
  },
  {
    id: 'efe',
    name: 'Efe',
    type: 'video',
    title: 'Trendyol\'dan Sonra Shopify',
    videoSrc: 'https://www.youtube.com/embed/EB_mM56p8MM?si=rA8rUsOtasFjM7m7',
    platform: 'ROASELL'
  },
  {
    id: 'rumeysa',
    name: 'Rümeysa Hanım',
    type: 'video',
    title: 'Rümeysa Hanım',
    videoSrc: 'https://player.vimeo.com/video/1057543862?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479',
    platform: 'ROASELL',
    resultValue: '1.000.000₺+'
  },
  {
    id: 'elxan',
    name: 'Elxan Bey',
    type: 'image',
    image: '/assets/testimonials/elxan-real.jpg',
    title: 'Elxan Bey Başarı Hikayesi'
  }
];