import type { CollectionEntry } from "astro:content";
// import type { MarkdownInstance } from 'astro';

export type BlogEntry = CollectionEntry<"blog">;
// export type BlogUnion = BlogEntry | MarkdownInstance<Record<string, any>>;

// export function isBlogEntry(ufo: BlogUnion): ufo is BlogEntry {
//   return (ufo as BlogEntry).data !== undefined;
// }

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

export function sortByPubDate(a: BlogEntry, b: BlogEntry): number {
  const pa = a.data.pubDate;
  const pb = b.data.pubDate;
  return pb.valueOf() - pa.valueOf();
}
