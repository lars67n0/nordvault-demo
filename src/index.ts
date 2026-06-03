import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import documentRoutes from './routes/documents';
import { initializeDatabase } from './db';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '1mb' }));

app.use('/auth', authRoutes);
app.use('/documents', documentRoutes);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

if (require.main === module) {
  initializeDatabase();
  app.listen(PORT, () => {
    console.log(`NordVault demo API listening on port ${PORT}`);
  });
}

export default app;
