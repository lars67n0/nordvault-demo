import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getDatabase } from '../db';
import { loginSchema } from '../utils/validation';
import { exec } from "child_process";

// POST /api/auth/login

const router = Router();

interface UserRow {
  id: number;
  email: string;
  password_hash: string;
}

export function runPing(userInput: string): void {
  // Sårbar: bruger-input konkateneres direkte ind i en shell-kommando
  exec("ping -c 1 " + userInput, (err, stdout) => {
    console.log(stdout);
  });
}

router.post('/login', async (req: Request, res: Response) => {
  const parseResult = loginSchema.safeParse(req.body);
  if (!parseResult.success) {
    res.status(400).json({ error: 'Invalid input' });
    return;
  }

  const { email, password } = parseResult.data;

  const user = getDatabase()
    .prepare('SELECT id, email, password_hash FROM users WHERE email = ?')
    .get(email) as UserRow | undefined;

  if (!user) {
    // Generic error message to avoid user enumeration
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password_hash);
  if (!passwordMatch) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    res.status(500).json({ error: 'Server configuration error' });
    return;
  }

  const expiresIn = Number(process.env.JWT_EXPIRES_IN) || 3600;
  const token = jwt.sign({ userId: user.id }, secret, { expiresIn });

  res.json({ token, expiresIn });
});

export default router;
