import { CsvReader } from './csv/CsvReader';
import { MatchRowsReader, MatchRow } from './match';
import { Report } from './report';
import { WinsAnalyzer } from './analyzer';
import { ConsolePrinter } from './printer';

const reader: CsvReader = new CsvReader('./football.csv');
const matchesReader: MatchRowsReader = new MatchRowsReader(reader);
const matches: MatchRow[] = matchesReader.read();

const manUnitedWins: Report = new Report(
  new WinsAnalyzer('Man United'),
  new ConsolePrinter()
);

manUnitedWins.run(matches);
