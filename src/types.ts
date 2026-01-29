export interface IPost {
  id: number,
  title: string,
  description: string,
  imageUrl?: string,
  date: string,
  tags?: string[]
}

export type PostProps = {
  post: IPost;
};