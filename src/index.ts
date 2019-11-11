import { MatchRowsReader, MatchRow } from './match';
import { Report } from './report';
import { ConsolePrinter, FilePrinter } from './printer';

const matchesReader: MatchRowsReader = MatchRowsReader.fromCsv('./football.csv');
const consolePrinter: ConsolePrinter = new ConsolePrinter();
const filePrinter: FilePrinter = new FilePrinter('report.txt');
const reports: Report[] = [
  Report.ofSeasonWins(consolePrinter),
  Report.ofSeasonWins(filePrinter)
];

const matches: MatchRow[] = matchesReader.read();
reports.forEach(report => report.run(matches));
