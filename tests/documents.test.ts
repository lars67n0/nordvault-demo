import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../src/index';
import { getDatabase, initializeDatabase, closeDatabase } from '../src/db';

let authToken: string;

beforeAll(() => {
  initializeDatabase();
});

afterAll(() => {
  closeDatabase();
});

beforeEach(async () => {
  const db = getDatabase();
  db.exec('DELETE FROM documents; DELETE FROM users;');

  const hash = await bcrypt.hash('correct_password', 10);
  db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)').run(
    'user@example.com',
    hash
  );

  const loginResponse = await request(app)
    .post('/auth/login')
    .send({ email: 'user@example.com', password: 'correct_password' });
  authToken = loginResponse.body.token;
});

describe('Documents API', () => {
  it('rejects unauthenticated requests', async () => {
    const response = await request(app).get('/documents');
    expect(response.status).toBe(401);
  });

  it('rejects requests with an invalid token', async () => {
    const response = await request(app)
      .get('/documents')
      .set('Authorization', 'Bearer not_a_valid_token');
    expect(response.status).toBe(401);
  });

  it('creates and retrieves a document', async () => {
    const createResponse = await request(app)
      .post('/documents')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ title: 'Test Document', content: 'Lorem ipsum dolor sit amet' });

    expect(createResponse.status).toBe(201);
    expect(createResponse.body.document.id).toBeGreaterThan(0);

    const documentId = createResponse.body.document.id;

    const getResponse = await request(app)
      .get(`/documents/${documentId}`)
      .set('Authorization', `Bearer ${authToken}`);

    expect(getResponse.status).toBe(200);
    expect(getResponse.body.document.title).toBe('Test Document');
  });

  it('rejects document creation with invalid input', async () => {
    const response = await request(app)
      .post('/documents')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ title: '', content: '' });

    expect(response.status).toBe(400);
  });

  it('lists only the authenticated users documents', async () => {
    await request(app)
      .post('/documents')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ title: 'My First Doc', content: 'Mine' });

    await request(app)
      .post('/documents')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ title: 'My Second Doc', content: 'Also mine' });

    const response = await request(app)
      .get('/documents')
      .set('Authorization', `Bearer ${authToken}`);

    expect(response.status).toBe(200);
    expect(response.body.documents).toHaveLength(2);
  });

  it('deletes a document', async () => {
    const createResponse = await request(app)
      .post('/documents')
      .set('Authorization', `Bearer ${authToken}`)
      .send({ title: 'To Delete', content: 'Goodbye' });

    const documentId = createResponse.body.document.id;

    const deleteResponse = await request(app)
      .delete(`/documents/${documentId}`)
      .set('Authorization', `Bearer ${authToken}`);

    expect(deleteResponse.status).toBe(204);

    const getResponse = await request(app)
      .get(`/documents/${documentId}`)
      .set('Authorization', `Bearer ${authToken}`);

    expect(getResponse.status).toBe(404);
  });

  it('returns 404 for non-existent document', async () => {
    const response = await request(app)
      .get('/documents/99999')
      .set('Authorization', `Bearer ${authToken}`);

    expect(response.status).toBe(404);
  });
});
