import { Router } from 'express';
import multer from 'multer';

import { apiFiles } from './controllers/api.files.controller';
import { apiUsers } from './controllers/api.users.controller';

export const router = Router();

router.post('/api/files', multer().single('file'), apiFiles);
router.get('/api/users', apiUsers);

