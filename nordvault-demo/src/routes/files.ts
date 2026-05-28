import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

// GET /api/files/download?name=...
router.get('/download', (req: Request, res: Response) => {
  const fileName = req.query.name as string;

  // Sårbar: bruger-input bruges direkte til at bygge en filsti.
  // En angriber kan sende ?name=../../etc/passwd og bryde ud af mappen.
  const filePath = path.join('/var/app/uploads', fileName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).json({ error: 'File not found' });
      return;
    }
    res.send(data);
  });
});

export default router;