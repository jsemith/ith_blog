import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

async function init() {
  // Absoluut pad naar je DB-bestand
  const dbFile = path.join(process.cwd(), 'database', 'ithblog.db');

  // Open (of maak) de database
  const db = await open({
    filename: dbFile,
    driver: sqlite3.Database
  });

  // Maak de tabel aan als die nog niet bestaat
  await db.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      excerpt TEXT,
      content TEXT NOT NULL
    );
  `);

  console.log('✅ Tabel posts is aangemaakt in', dbFile);

  await db.close();
}

init().catch(err => {
  console.error('🚨 Fout bij init DB:', err);
  process.exit(1);
});
