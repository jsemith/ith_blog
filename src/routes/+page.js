// src/routes/+page.js
export async function load({ fetch }) {
  const res = await fetch('/api/posts');
  const posts = res.ok ? await res.json() : [];
  return { posts };
}
