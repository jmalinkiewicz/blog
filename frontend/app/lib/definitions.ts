export type PostType = {
  id: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  content: string;
  author: {
    name: string;
  };
  userId: string;
  slug: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
};
