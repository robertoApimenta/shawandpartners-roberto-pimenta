import { Request, Response } from 'express';

import { readFile } from '../utils/read.file';

export const apiUsers = async (req: Request, res: Response) => {
  const data = await readFile();
  return res.status(200).json(data);
};
