import { Router } from 'express';

import { apiFiles } from './controllers/api.files.controller';

export const router = Router();

router.post('/api/files', apiFiles);

