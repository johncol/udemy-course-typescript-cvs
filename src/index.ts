import { CsvReader } from './CsvReader';
import { MatchResult } from './MatchResult';

const reader: CsvReader = new CsvReader('./football.csv');
const matches: string[][] = reader.read();

let manUnitedWins: number = 0;

for (let match of matches) {
  const wonAsLocal: boolean =
    match[1] === 'Man United' && match[5] === MatchResult.HomeWin;
  const wonAsAway: boolean =
    match[2] === 'Man United' && match[5] === MatchResult.AwayWin;
  if (wonAsLocal || wonAsAway) {
    manUnitedWins++;
  }
}

console.log(`Manchester United wins in the seasons: ${manUnitedWins}`);
