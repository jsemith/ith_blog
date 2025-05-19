import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function GET() {
  const db = await open({ filename: './database/ithblog.db', driver: sqlite3.Database });
  const posts = await db.all('SELECT id, title, date, excerpt FROM posts ORDER BY date DESC');
  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' }
  });
}
