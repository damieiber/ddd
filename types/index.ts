// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: ('dev' | 'data' | 'hybrid')[];
  stack: string[];
  dataMetric: string;
  size: 'sm' | 'md' | 'lg';
  link?: string;
  github?: string;
  image?: string;
}

// Experience interface
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'dev' | 'data' | 'hybrid';
}

// Skill for radar chart
export interface Skill {
  name: string;
  value: number; // 0-100
  fullMark: number;
}

// Navigation item
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

// Social link
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
