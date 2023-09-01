import { Router } from 'express';
import multer from 'multer';

import { apiFiles } from './controllers/api.files.controller';

export const router = Router();

router.post('/api/files', multer().single('file'), apiFiles);

