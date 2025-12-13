import { Book, Department, Step } from "./types";

export const BOOKS: Book[] = [
  {
    id: 1,
    title: "Intro to Algorithms",
    author: "Cormen, Leiserson, Rivest",
    price: 45,
    originalPrice: 130,
    discountBadge: "-65%",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXT9XSHbk3GK6xcpED8tsTzOH4N4azc03NE3Xn9qjyR3rS1BfZc5WjoVjiNHsTiBwK7cPHQrIbQ82ueGWIrzPdGfy_Ym1I-QVquQF_0En-AzDKGEEd3ern9gY7JSTWKK775r6dRN2HCjWVSTby5EhIrOLou5WcdZlMEisIZ0f6YlXQl5HdEYx0plfNN2iG5YwCXOwsDewIDLXeGw0olK5Fz0s5e6i8aaGXNll5Z30uE3swWyJKDys1eXJ284NXOUmbp2jDlwYPqs8",
  },
  {
    id: 2,
    title: "Principles of Economics",
    author: "Mankiw, N. Gregory",
    price: 80,
    originalPrice: 180,
    discountBadge: "New",
    isNew: true,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP7zDPgCPOQ9Q0RSPoA-5NCEPnYIYCIQwoZttvvnNwjHG9hTR4y9FQXpKisuJALB6dMO0kFM3CELY9LTZ5x0hrJuehGs_Sy_8WSd8CH0hQxHv57OXt-eRDy76_WxTjRh3ccFA8h5Bvcb1YrB56k4C-EXB5blhBGlOBmUJx1b7ugY7q4T8-Pf2m0cYj2ZGZX8hKRkilhphFVnl99f8yDls6IPU_GBoTkBcDm4T9nwjQQGKKoxLlBb3NQEHBLvyY5qeq55K_hDKExsw",
  },
  {
    id: 3,
    title: "Organic Chemistry",
    author: "David Klein",
    price: 60,
    originalPrice: 100,
    discountBadge: "-40%",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt3x9vjxlHJdP0D5Jhg2aJj1vbhWhjqZjDuQclk7_MOkbdcaV7tvFJilWjFDVoOL48CJrCA9GuxiF94ggdXp0OE-UFI3Cq1jG3nZvzfsj3zW2BqwCvl6AWXMnkosP_jzjlDeLP2jUB4ryyBq7Q71xalyKShI576KeMsMkEtKiXY3Eo3eeFTNv0JrweQ_h1VjTI-2sDL8_j_IW3z4Xaj48N9eKbkZxcY6fbQYQDmgSb-oytuPm-yFLkUwzBt7PivOWTgWJ1EhIerk8",
  },
  {
    id: 4,
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    price: 55,
    originalPrice: 110,
    discountBadge: "-50%",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4YONKuZl2OI--aXF-u90-W8m5X8UIOh86p8bAZmCVjSFVpqdHHpp5CUEhyVsYsws5xmmKhecwgT2eNxxRxjE6ws2gVmCZ8ez8Je3Zr-F2WS7SzGnTxdA--zV-l2LCDqhuT1AQ5Fhz_z3NWaQA-gIwF-YoTq3SiWllIx3EfEEEsRdDrXkMsjHkhRr6Vn6HykpURV0NoYD3a0QckqSQSOQB9Yb5yeJppri9IYdR0HIwAzewDVNknR_gatGLmtori7-rEyRray8xBXc",
  },
  {
    id: 5,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 25,
    originalPrice: 100,
    discountBadge: "-75%",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgFM3FE0y8CMEN6sW-AViQXHxAyyL3Hg4kGGB72Ixp0_WTgHFMwyTJRL1iqQ4oUd-DnI4LH6r1e6jLPzdXyEiwW6pDOU3ZhJxgVyfd6frelCMhvbO2xA4He2wrRj5gK0yrwDMN7QOIgzwxywhf3ZClQbwq1HdQKKoZ0BKotz7vjqPmkfkZeHoNwk05L_m1CySzSQ__JV0To7tUP5PARVpRGs20K2IdbfjijctJsQMNLLw0C5yo12wEfPc1h_gqzTgEozrGKsfE4lI",
  },
];

export const DEPARTMENTS: Department[] = [
  { id: 1, name: "Computer Science", icon: "terminal" },
  { id: 2, name: "Management", icon: "business_center" },
  { id: 3, name: "General Studies", icon: "menu_book" },
  { id: 4, name: "Engineering", icon: "settings" },
  { id: 5, name: "Humanities", icon: "public" },
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: "1. List in Seconds",
    description: "Scan your book's barcode. We auto-fill the details and suggest a price.",
    icon: "post_add",
    highlighted: true,
  },
  {
    id: 2,
    title: "2. Connect Securely",
    description: "Chat with verified students on your campus. Agree on a time.",
    icon: "chat",
  },
  {
    id: 3,
    title: "3. Meet on Campus",
    description: "Meet at a safe spot like the library or student center. Exchange & get paid.",
    icon: "handshake",
  },
];
