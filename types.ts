export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  discountBadge?: string; // e.g., "-65%" or "New"
  isNew?: boolean;
  imageUrl: string;
}

export interface Department {
  id: number;
  name: string;
  icon: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}
