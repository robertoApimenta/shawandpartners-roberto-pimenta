import path from 'node:path';
import fs from 'fs/promises';

const databasepath = path.resolve(__dirname, '..', 'database', 'data.json');

export const readFile = async () => {
  let fileContent = await fs.readFile(databasepath, 'utf-8');
  if (fileContent) {
    fileContent = await JSON.parse(fileContent);
    return fileContent;
  }
  return [];
};
