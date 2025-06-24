
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');

  // Sort by publication date (most recent first)
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime();
  });

  // Get first 5 posts
  const top5 = sortedPosts.slice(0, 5).map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    link: `/blog/${post.id}/`,
  }));

  return new Response(JSON.stringify(top5), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
