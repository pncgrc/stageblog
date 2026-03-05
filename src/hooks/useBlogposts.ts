import { contentfulClient } from "../lib/contentful";
import type { BlogPostSkeleton } from "../types";

export async function getBlogPosts() {
  const response = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    order: ['-sys.createdAt'],
  });

  return response.items.map((item) => ({
    id: item.sys.id,
    customId: item.fields.id,
    title: item.fields.title,
    description: item.fields.description,
    imageUrl: item.fields.imageUrl && 'fields' in item.fields.imageUrl
    ? item.fields.imageUrl.fields.file?.url
    : undefined,
    date: item.fields.date,
    tags: item.fields.tags
  }));
}