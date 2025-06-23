export interface MenuItem {
  id: string;
  name: string;
  content?: string;
  children?: MenuItem[];
} 