import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../src/index';
import { getDatabase, initializeDatabase, closeDatabase } from '../src/db';

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
});

describe('POST /auth/login', () => {
  it('returns a token for valid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'user@example.com', password: 'correct_password' });

    expect(response.status).toBe(200);
    expect(typeof response.body.token).toBe('string');
    expect(response.body.expiresIn).toBe(3600);
  });

  it('returns 401 for invalid password', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'user@example.com', password: 'wrong_password' });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Invalid credentials');
  });

  it('returns 401 for unknown email', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'nobody@example.com', password: 'any_password_123' });

    expect(response.status).toBe(401);
  });

  it('returns 400 for malformed input', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'not_an_email', password: 'short' });

    expect(response.status).toBe(400);
  });
});
