
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  coverImage: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export type Tag = {
  id: string;
  name: string;
  slug: string;
};
