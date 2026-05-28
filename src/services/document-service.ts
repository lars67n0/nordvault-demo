import { getDatabase } from '../db';

export interface Document {
  id: number;
  ownerId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface DocumentRow {
  id: number;
  owner_id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

function mapRow(row: DocumentRow): Document {
  return {
    id: row.id,
    ownerId: row.owner_id,
    title: row.title,
    content: row.content,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function listDocumentsForUser(userId: number): Document[] {
  const rows = getDatabase()
    .prepare(
      'SELECT id, owner_id, title, content, created_at, updated_at FROM documents WHERE owner_id = ? ORDER BY updated_at DESC'
    )
    .all(userId) as DocumentRow[];
  return rows.map(mapRow);
}

export function getDocumentById(id: number, userId: number): Document | null {
  const row = getDatabase()
    .prepare(
      'SELECT id, owner_id, title, content, created_at, updated_at FROM documents WHERE id = ? AND owner_id = ?'
    )
    .get(id, userId) as DocumentRow | undefined;
  return row ? mapRow(row) : null;
}

export function createDocument(
  userId: number,
  title: string,
  content: string
): Document {
  const result = getDatabase()
    .prepare(
      'INSERT INTO documents (owner_id, title, content) VALUES (?, ?, ?)'
    )
    .run(userId, title, content);

  const created = getDocumentById(Number(result.lastInsertRowid), userId);
  if (!created) {
    throw new Error('Failed to retrieve newly created document');
  }
  return created;
}

export function deleteDocument(id: number, userId: number): boolean {
  const result = getDatabase()
    .prepare('DELETE FROM documents WHERE id = ? AND owner_id = ?')
    .run(id, userId);
  return result.changes > 0;
}
