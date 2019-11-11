import { CsvReader } from './csv/CsvReader';
import { MatchRowsReader, MatchRow } from './match';
import { Report } from './report';
import { SeasonWinsAnalyzer } from './analyzer';
import { ConsolePrinter } from './printer';

const reader: CsvReader = new CsvReader('./football.csv');
const matchesReader: MatchRowsReader = new MatchRowsReader(reader);
const matches: MatchRow[] = matchesReader.read();

const consolePrinter: ConsolePrinter = new ConsolePrinter();

const reports: Report[] = [new Report(new SeasonWinsAnalyzer(), consolePrinter)];

reports.forEach(report => report.run(matches));
