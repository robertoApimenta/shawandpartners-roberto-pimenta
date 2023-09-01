import { Request, Response } from 'express';

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
        favority_sport: row[3],
      };
      return dat;
    });
    return res.status(200).json(data);
  }
  return res.send('mesagem');
};
