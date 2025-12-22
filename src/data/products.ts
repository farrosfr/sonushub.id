
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  slug: string;
  kategori: string;
  brand: string;
  unit?: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'MCB 1 Phase 6A',
    price: 25000,
    imageUrl: '/placeholders/mcb.webp',
    description: 'Miniature Circuit Breaker (MCB) untuk proteksi arus lebih pada instalasi listrik rumah.',
    slug: 'mcb-1-phase-6a',
    kategori: 'Perangkat Proteksi',
    brand: 'Schneider Electric'
  },
  {
    id: '2',
    name: 'Kabel NYM 3x2.5mm',
    price: 15000,
    imageUrl: '/placeholders/kabel-nym.webp',
    description: 'Kabel listrik tembaga dengan 3 inti ukuran 2.5mm, cocok untuk instalasi indoor.',
    slug: 'kabel-nym-3x2-5mm',
    kategori: 'Kabel',
    brand: 'Supreme'
  },
  {
    id: '3',
    name: 'Stop Kontak Dinding',
    price: 18000,
    imageUrl: '/placeholders/stop-kontak.webp',
    description: 'Stop kontak tanam dinding dengan frame, standar SNI.',
    slug: 'stop-kontak-dinding',
    kategori: 'Aksesoris Listrik',
    brand: 'Panasonic'
  },
  {
    id: '4',
    name: 'Lampu LED 12W',
    price: 35000,
    imageUrl: '/placeholders/lampu-led.jpg',
    description: 'Lampu LED hemat energi dengan cahaya putih terang, daya 12 Watt.',
    slug: 'lampu-led-12w',
    kategori: 'Pencahayaan',
    brand: 'Philips'
  }
];
