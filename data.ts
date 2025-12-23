
import { Outlet, MenuItem } from './types';

export const BRAND_INFO = {
  name: "Café Delhi Heights",
  legal: "A Unit of Batra Bros Food and Beverages Pvt. Ltd.",
  founded: 2011,
  founders: ["Vikrant Batra", "Sharad Batra"],
  mission: "To deliver warm, comfort-driven casual dining with vibrant ambiance and exceptional hospitality where good food and great moments bring people together.",
  vision: "Become a pan-India casual dining leader with 120 outlets by 2028 and ₹500 crore in revenue."
};

export const OUTLETS: Outlet[] = [
  {
    name: "Janpath",
    address: "68/1, First Floor, Janpath, New Delhi 110001",
    phone: "9711034033",
    email: "cdhjanpath@gmail.com",
    hours: "12PM–12AM",
    city: "New Delhi"
  },
  {
    name: "DLF Avenue",
    address: "Shop 222–224, First Floor, Saket, New Delhi",
    phone: "8470054033",
    email: "cdhsaket@gmail.com",
    hours: "11AM–12AM",
    city: "New Delhi"
  },
  {
    name: "Khan Market",
    address: "Shop 26, Middle Lane, New Delhi",
    phone: "9643254033",
    email: "cdhkhanmkt@gmail.com",
    hours: "09AM–09PM",
    city: "New Delhi"
  },
  {
    name: "Red Fort",
    address: "Visitor Center, RR Barracks, Red Fort, New Delhi",
    phone: "9311062314",
    email: "cdhredfort@gmail.com",
    hours: "Tue–Sun 09AM–09PM",
    city: "New Delhi"
  },
  {
    name: "Mall of Faridabad",
    address: "SH/3F/13, 3rd Floor, Mall of Faridabad",
    phone: "9625954033",
    email: "cdhmof@gmail.com",
    hours: "12PM–12AM",
    city: "Faridabad"
  },
  {
    name: "Aerocity",
    address: "World Mark-3, Aerocity, IGI Airport, New Delhi",
    phone: "9643654033",
    email: "cdhaerocity@gmail.com",
    hours: "12PM–12AM",
    city: "New Delhi"
  },
  {
    name: "Mall of India",
    address: "E-439, 3rd Floor, DLF Mall of India, Noida",
    phone: "9643754033",
    email: "cdhmallofindia@gmail.com",
    hours: "12PM–11PM",
    city: "Noida"
  }
];

export const SAMPLE_MENU: MenuItem[] = [
  { name: "Juicy Lucy Burger", category: "Burgers", description: "The legendary cheese-filled meat patty that made us famous.", isSignature: true },
  { name: "Butter Chicken Pasta", category: "Fusion", description: "Creamy makhani sauce meets al dente penne.", isSignature: true },
  { name: "Delhi Chaat Platter", category: "Indian Classics", description: "A vibrant medley of street food favorites." },
  { name: "Banoffee Pie", category: "Desserts", description: "Layers of banana, cream, and toffee." },
  { name: "ISBT Makhani Maggi", category: "Comfort Food", description: "Nostalgic Maggi with a rich makhani twist." },
  { name: "Virgin Sangria", category: "Mocktails", description: "Refreshing fruit-infused non-alcoholic wine." }
];
