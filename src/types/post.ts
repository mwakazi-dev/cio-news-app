export interface Post {
  id?: string;
  title: string;
  content: string;
  publishedAt: string;
  authorId: string;
  author: string;
  profileImage: string;
  thumbnail: string;
  tags: string[];
}
