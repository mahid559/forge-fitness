import { photo } from '@/lib/images';

export type GalleryCategory =
  | 'Strength'
  | 'Conditioning'
  | 'CrossTraining'
  | 'Boxing'
  | 'Yoga'
  | 'Facility';

export const galleryCategories: Array<{ id: GalleryCategory | 'All'; label: string }> = [
  { id: 'All', label: 'All' },
  { id: 'Strength', label: 'Strength' },
  { id: 'Conditioning', label: 'Conditioning' },
  { id: 'CrossTraining', label: 'CrossTraining' },
  { id: 'Boxing', label: 'Boxing' },
  { id: 'Yoga', label: 'Yoga' },
  { id: 'Facility', label: 'Facility' },
];

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  category: GalleryCategory;
  span: 'normal' | 'tall' | 'wide';
};

export const gallery: GalleryItem[] = [
  { id: 'g1', src: photo('1590487988256-9ed24133863e', 800, 1000, 76), title: 'Barbell focus', category: 'Strength', span: 'tall' },
  { id: 'g2', src: photo('1541534741688-6078c6bfb5c5', 1200, 800, 76), title: 'Morning miles', category: 'Conditioning', span: 'wide' },
  { id: 'g3', src: photo('1521805103424-d8f8430e8933', 800, 800, 76), title: 'Group energy', category: 'CrossTraining', span: 'normal' },
  { id: 'g4', src: photo('1552674605-db6ffd4facb5', 800, 1000, 76), title: 'Round three', category: 'Boxing', span: 'tall' },
  { id: 'g5', src: photo('1506126613408-eca07ce68773', 800, 800, 76), title: 'Deep stretch', category: 'Yoga', span: 'normal' },
  { id: 'g6', src: photo('1567013127542-490d757e51fc', 800, 800, 76), title: 'The Weight Room', category: 'Facility', span: 'normal' },
  { id: 'g7', src: photo('1532550907401-a500c9a57435', 800, 1000, 76), title: 'Heavy singles', category: 'Strength', span: 'tall' },
  { id: 'g8', src: photo('1584863231364-2edc166de576', 1200, 800, 76), title: 'Sprint intervals', category: 'Conditioning', span: 'wide' },
  { id: 'g9', src: photo('1533560904424-a0c61dc306fc', 800, 800, 76), title: 'Off the floor', category: 'CrossTraining', span: 'normal' },
  { id: 'g10', src: photo('1566241440091-ec10de8db2e1', 800, 800, 76), title: 'Pad work', category: 'Boxing', span: 'normal' },
  { id: 'g11', src: photo('1571902943202-507ec2618e8f', 800, 1000, 76), title: 'Restore', category: 'Yoga', span: 'tall' },
  { id: 'g12', src: photo('1526506118085-60ce8714f8c5', 1200, 800, 76), title: 'Forged steel', category: 'Facility', span: 'wide' },
  { id: 'g13', src: photo('1549476464-37392f717541', 800, 800, 76), title: 'Squat depth', category: 'Strength', span: 'normal' },
  { id: 'g14', src: photo('1593079831268-3381b0db4a77', 800, 800, 76), title: 'City running club', category: 'Conditioning', span: 'normal' },
  { id: 'g15', src: photo('1526401485004-46910ecc8e51', 800, 1000, 76), title: 'Explosive power', category: 'CrossTraining', span: 'tall' },
  { id: 'g16', src: photo('1517963879433-6ad2b056d712', 1200, 800, 76), title: 'First bell', category: 'Boxing', span: 'wide' },
  { id: 'g17', src: photo('1544367567-0f2fcb009e0b', 800, 800, 76), title: 'Balance day', category: 'Yoga', span: 'normal' },
  { id: 'g18', src: photo('1517130038641-a774d04afb3c', 800, 800, 76), title: 'Track side', category: 'Facility', span: 'normal' },
  { id: 'g19', src: photo('1571019613914-85f342c6a11e', 800, 800, 76), title: 'Meet the bar', category: 'Strength', span: 'normal' },
  { id: 'g20', src: photo('1611672585731-fa10603fb9e0', 800, 800, 76), title: 'Late shift', category: 'Conditioning', span: 'normal' },
  { id: 'g21', src: photo('1596357395217-80de13130e92', 800, 1000, 76), title: 'Engine room', category: 'CrossTraining', span: 'tall' },
  { id: 'g22', src: photo('1584464491033-06628f3a6b7b', 800, 800, 76), title: 'Lights out', category: 'Boxing', span: 'normal' },
  { id: 'g23', src: photo('1584735935682-2f2b69dff9d2', 1200, 800, 76), title: 'Breathe', category: 'Yoga', span: 'wide' },
  { id: 'g24', src: photo('1540497077202-7c8a3999166f', 800, 800, 76), title: 'The grind floor', category: 'Facility', span: 'normal' },
];

/** Landscape crops used for lightbox display */
export function galleryFull(src: string): string {
  // swap to a larger, landscape render of the same photo
  return src.replace(/w=\d+/, 'w=1600').replace(/h=\d+/, 'h=1000');
}