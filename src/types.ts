import type { Document } from '@contentful/rich-text-types';
import type { EntryFieldTypes } from 'contentful';


/* Interfaces */

export interface IPost {
  id: string,
  customId: number,
  title: string,
  description: Document,
  imageUrl?: string,
  date: string,
  tags?: string[]
}

export type PostProps = {
  post: IPost;
};

export interface BlogPostSkeleton {
  contentTypeId: 'blogPost';
  fields: {
    id: EntryFieldTypes.Integer;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    imageUrl: EntryFieldTypes.AssetLink;
    date: EntryFieldTypes.Symbol;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  };
}
