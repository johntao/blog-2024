import type { CollectionEntry } from "astro:content";
// import type { MarkdownInstance } from 'astro';

export type BlogEntry = CollectionEntry<"logseq">;
export type DocEntry = CollectionEntry<"docs">;
export type AnyEntry = BlogEntry | DocEntry;

// export function sortByPubDate(a: BlogUnion, b: BlogUnion): number {
//   let pa: Date, pb: Date;
//   if (isBlogEntry(a)) {
//     pa = a.data.pubDate;
//     pb = (b as BlogEntry).data.pubDate;
//   } else {
//     pa = new Date(a.frontmatter.pubDate);
//     pb = new Date((b as MarkdownInstance<Record<string, any>>).frontmatter.pubDate);
//   }
//   return pb.valueOf() - pa.valueOf();
// }

export function isBlogEntry(post: any): post is BlogEntry {
  return (post as BlogEntry).slug !== undefined;
}

export function isDocEntry(post: any): post is DocEntry {
  return post.slug === undefined;
}

export function sortByPubDate(a: BlogEntry, b: BlogEntry): number {
  const pa = a.data.pubDate;
  const pb = b.data.pubDate;
  if (!pa || !pb) return 0;
  return pb.valueOf() - pa.valueOf();
}
