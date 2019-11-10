import { CsvReader } from './CsvReader';
import { MatchResult } from './MatchResult';
import { MatchRowsMapper } from './MatchRowsReader';
import { MatchRow } from './MatchRow';

const reader: CsvReader = new CsvReader('./football.csv');
const data: string[][] = reader.read();

const mapper: MatchRowsMapper = new MatchRowsMapper();
const matches: MatchRow[] = mapper.map(data);

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
