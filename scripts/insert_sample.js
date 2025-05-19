// scripts/insert_sample.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

async function insertSample() {
  const dbFile = path.join(process.cwd(), 'database', 'ithblog.db');
  const db = await open({
    filename: dbFile,
    driver: sqlite3.Database
  });

  // Check of er al data is
  const count = await db.get('SELECT COUNT(*) AS c FROM posts');
  if (count.c > 0) {
    console.log('Er staan al posts in de database, niets toegevoegd.');
  } else {
    const title   = 'Test Post';
    const date    = new Date().toISOString().split('T')[0]; // bv '2025-05-19'
    const excerpt = 'Korte samenvatting van de testpost.';
    const content = `# Hallo wereld

Dit is een **testpost** om te checken of je blog werkt.
`;

    await db.run(
      'INSERT INTO posts (title, date, excerpt, content) VALUES (?, ?, ?, ?)',
      title, date, excerpt, content
    );
    console.log('✅ Voorbeeldpost toegevoegd met id=1');
  }

  await db.close();
}

insertSample().catch(err => {
  console.error('🚨 Fout bij toevoegen sample post:', err);
  process.exit(1);
});
