export interface Hero {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  image?: string;
  phone?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  achievements: string[];
  responsibilities?: string[];
  projects?: {
    name: string;
    details: string[];
  }[];
}



export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Skills {
  frontend_ui: string[];
  backend_devops: string[];
  ai_ml: string[];
  databases_tools: string[];
  // Allow for dynamic keys if needed, but strict typing is better for now
  [key: string]: string[];
}

export interface PortfolioData {
  hero: Hero;
  experience: Experience[];
  achievements: string[];
  education: Education[];
  skills: Skills;
}
