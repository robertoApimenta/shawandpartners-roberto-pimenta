import path from 'node:path';
import fs from 'fs/promises';

const databasepath = path.resolve(__dirname, '..', 'database', 'data.json');

interface DataObject {
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
}

export const writeFile = async (data: DataObject[]) => {
  const jsonData = JSON.stringify(data, null, 2);
  await fs.writeFile(databasepath, jsonData, 'utf-8');
  return [];
};
