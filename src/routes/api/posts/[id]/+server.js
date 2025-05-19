import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function GET({ params }) {
  const db = await open({ filename: './database/ithblog.db', driver: sqlite3.Database });
  const post = await db.get('SELECT * FROM posts WHERE id = ?', params.id);

  if (!post) {
    return new Response(JSON.stringify({ error: 'Post niet gevonden' }), { status: 404 });
  }

  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' }
  });
}
