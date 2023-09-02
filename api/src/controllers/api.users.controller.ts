import { Request, Response } from 'express';

import { readFile } from '../utils/read.file';

interface csvData {
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
}

export const apiUsers = async (req: Request, res: Response) => {
  const { q } = req.query;

  const fileContents = await readFile();
  let data: csvData[] = [];

  if (Array.isArray(fileContents)) {
    data = fileContents as csvData[];
  } else {
    // Manipule o caso em que o conteúdo do arquivo não é um array de objetos
    throw new Error('Conteúdo do arquivo inválido.');
  }

  if (q) {
    const regex = new RegExp(q.toString(), 'i'); // 'i' torna a pesquisa insensível a maiúsculas/minúsculas
    const result = data.filter(obj => {
      for (const campo in obj) {
        if (
          typeof obj[campo as keyof csvData] === 'string' &&
          obj[campo as keyof csvData].toLowerCase().match(regex)
        ) {
          return true;
        }
      }
      return false;
    });
    return res.status(200).json(result);
  }

  return res.status(200).json(fileContents);
};
