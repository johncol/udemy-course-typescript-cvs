import { CsvReader } from './csv/CsvReader';
import { MatchRowsReader, MatchRow } from './match';
import { Report } from './report';
import { SeasonWinsAnalyzer } from './analyzer';
import { ConsolePrinter, FilePrinter } from './printer';

const reader: CsvReader = new CsvReader('./football.csv');
const matchesReader: MatchRowsReader = new MatchRowsReader(reader);
const matches: MatchRow[] = matchesReader.read();

const winsAnalyzer: SeasonWinsAnalyzer = new SeasonWinsAnalyzer();
const consolePrinter: ConsolePrinter = new ConsolePrinter();
const filePrinter: FilePrinter = new FilePrinter('report.txt');

const reports: Report[] = [
  new Report(winsAnalyzer, consolePrinter),
  new Report(winsAnalyzer, filePrinter)
];

reports.forEach(report => report.run(matches));
