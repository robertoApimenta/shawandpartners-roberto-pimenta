import { Request, Response } from 'express';

export const apiFiles = async (req: Request, res: Response) => {
  const file = req.file;
  if (file) {
    const rows = file.buffer.toString('utf-8').split('\r\n');
    const data = rows.map(el => {
      const boleto = el.split(',');
      const dados = {
        name: boleto[0],
        city: boleto[1],
        country: boleto[2],
        favority_sport: boleto[3],
      };
      return dados;
    });
    return res.status(200).json(data);
  }
  return res.send('mesagem');
};
