export interface Period {
  start: string; // "YYYY-MM" 형식
  end: string | null; // null = 현재 재직/진행 중
}

export interface ContactInfo {
  email: string;
  github?: string;
  linkedin?: string;
  blog?: string;
  resume?: string;
  twitter?: string;
  website?: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location?: string;
  contact: ContactInfo;
}

export interface Task {
  subject: string;
  description: string;
  period: Period;
  role: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  location?: string;
  period: Period;
  role: string;
  description?: string;
  technologies: string[];
  tasks: Task[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectMedia {
  src: string;  // 로컬 경로("/projects/img.png") 또는 YouTube URL
  alt?: string; // 이미지일 때 alt 텍스트
}

export interface Project {
  name: string;
  description: string;
  period?: Period;
  technologies: string[];
  media?: ProjectMedia;
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: Period;
  description?: string;
}

export interface PortfolioData {
  profile: Profile;
  experiences: Experience[];
  skills: SkillCategory[];
  projects?: Project[];
  education?: Education[];
}
