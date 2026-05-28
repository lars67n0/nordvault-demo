import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const UPLOAD_ROOT = '/var/app/uploads';

// GET /api/files/download?name=...
router.get('/download', (req: Request, res: Response) => {
  const fileName = req.query.name as string;
  if (!fileName || typeof fileName !== 'string') {
    res.status(400).json({ error: 'Invalid file name' });
    return;
  }

  const resolvedPath = path.resolve(UPLOAD_ROOT, fileName);
  const uploadRootWithSep = UPLOAD_ROOT.endsWith(path.sep) ? UPLOAD_ROOT : UPLOAD_ROOT + path.sep;
  if (resolvedPath !== UPLOAD_ROOT && !resolvedPath.startsWith(uploadRootWithSep)) {
    res.status(403).json({ error: 'Access denied' });
    return;
  }

  fs.readFile(resolvedPath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).json({ error: 'File not found' });
      return;
    }
    res.send(data);
  });
});

export default router;