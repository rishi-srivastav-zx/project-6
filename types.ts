
export interface Outlet {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  city: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface MenuItem {
  name: string;
  category: string;
  description: string;
  isSignature?: boolean;
}
