import { Router, Response } from 'express';
import { authenticate, AuthenticatedRequest } from '../middleware/auth';
import {
  listDocumentsForUser,
  getDocumentById,
  createDocument,
  deleteDocument,
} from '../services/document-service';
import {
  createDocumentSchema,
  documentIdSchema,
} from '../utils/validation';

const router = Router();

router.use(authenticate);

router.get('/', (req: AuthenticatedRequest, res: Response) => {
  const userId = req.userId!;
  const documents = listDocumentsForUser(userId);
  res.json({ documents });
});

router.get('/:id', (req: AuthenticatedRequest, res: Response) => {
  const idResult = documentIdSchema.safeParse(req.params);
  if (!idResult.success) {
    res.status(400).json({ error: 'Invalid document id' });
    return;
  }

  const userId = req.userId!;
  const document = getDocumentById(idResult.data.id, userId);

  if (!document) {
    res.status(404).json({ error: 'Document not found' });
    return;
  }

  res.json({ document });
});

router.post('/', (req: AuthenticatedRequest, res: Response) => {
  const bodyResult = createDocumentSchema.safeParse(req.body);
  if (!bodyResult.success) {
    res.status(400).json({ error: 'Invalid input' });
    return;
  }

  const userId = req.userId!;
  const document = createDocument(
    userId,
    bodyResult.data.title,
    bodyResult.data.content
  );

  res.status(201).json({ document });
});

router.delete('/:id', (req: AuthenticatedRequest, res: Response) => {
  const idResult = documentIdSchema.safeParse(req.params);
  if (!idResult.success) {
    res.status(400).json({ error: 'Invalid document id' });
    return;
  }

  const userId = req.userId!;
  const deleted = deleteDocument(idResult.data.id, userId);

  if (!deleted) {
    res.status(404).json({ error: 'Document not found' });
    return;
  }

  res.status(204).send();
});

export default router;
