import fs from 'fs';

const content: string[][] = fs
  .readFileSync('./football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string) => row.split(','));

console.log(content);
