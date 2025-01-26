import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { isBlogEntry, type AnyEntry } from '@/utils/data.util';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context: { site: string; }) {
	const coll1: AnyEntry[] = await getCollection('docs');
	const coll2: AnyEntry[] = await getCollection('logseq');
	const posts = coll1.concat(coll2)
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => {
			const link = isBlogEntry(post) ? `/${post.collection}/${post.slug}/` : post.id;
			return ({
				...post.data,
				link,
			});
		}),
	});
}
