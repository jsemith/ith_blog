// src/routes/posts/[id]/+page.js
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
  const res = await fetch(`/api/posts/${params.id}`);
  if (!res.ok) throw error(res.status, 'Post niet gevonden');
  const post = await res.json();
  return { post };
}
