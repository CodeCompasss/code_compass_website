export interface GitHubProject {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  license: {
    key: string;
    name: string;
  } | null;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  language: string;
  stars: number;
  license: string;
  type: "free" | "premium";
  featured: boolean;
  createdAt: string | null;
  category: "developer" | "student";
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  github?: string;
  linkedin?: string;
  specialties: string[];
}
