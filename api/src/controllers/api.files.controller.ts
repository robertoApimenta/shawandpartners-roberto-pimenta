import { Request, Response } from 'express';

import { writeFile } from '../utils/write.file';

export const apiFiles = async (req: Request, res: Response) => {
  const file = req.file;

  if (file) {
    if (!file.originalname.endsWith('.csv')) {
      return res.status(400).json({ message: 'Invalid extension' });
    }
    const rows = file.buffer.toString('utf-8').split('\r\n');
    rows.shift();
    const data = rows.map(el => {
      const row = el.split(',');
      const dat = {
        name: row[0],
        city: row[1],
        country: row[2],
        favorite_sport: row[3],
      };
      return dat;
    });
    await writeFile(data);
    return res.status(200).json(data);
  }
  return res.status(400).json({ message: 'Empty file' });
};
