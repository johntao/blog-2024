import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const blogSchema = docsSchema({
	extend: z.object({
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		minutesRead: z.string().optional(),
		tags: z.array(z.string()).optional(),
		yearSep: z.number().optional(),
		// heroImage: z.string().optional(),
	})
});
/*
schema: z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
	minutesRead: z.string().optional(),
	tags: z.array(z.string()).optional(),
	yearSep: z.number().optional(),
}),
*/

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: blogSchema
	}),
	logseq: defineCollection({
		type: 'content',
		schema: blogSchema,
	})
};
