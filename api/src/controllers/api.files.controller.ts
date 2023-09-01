import { Request, Response } from 'express';

import { writeFile } from '../utils/write.file';

export const apiFiles = async (req: Request, res: Response) => {
  const file = req.file;
  if (file) {
    const rows = file.buffer.toString('utf-8').split('\r\n');
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
    return res.sendStatus(200);
  }
  return res.status(400).json({ message: 'Empty file' });
};
