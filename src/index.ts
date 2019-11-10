import fs from 'fs';

const matches: string[][] = fs
  .readFileSync('./football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string) => row.split(','));

let manUnitedWins: number = 0;

for (let match of matches) {
  const wonAsLocal: boolean = match[1] === 'Man United' && match[5] === 'H';
  const wonAsAway: boolean = match[2] === 'Man United' && match[5] === 'A';
  if (wonAsLocal || wonAsAway) {
    manUnitedWins++;
  }
}

console.log(`Manchester United wins in the seasons: ${manUnitedWins}`);
