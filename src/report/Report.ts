import { MatchRow } from './../match';
import { SeasonWinsAnalyzer } from './../analyzer';

export interface Analyzer {
  runAnalysis(matches: MatchRow[]): string;
}

export interface Printer {
  print(analysis: string): void;
}

export class Report {
  static ofSeasonWins(printer: Printer): Report {
    return new Report(new SeasonWinsAnalyzer(), printer);
  }

  constructor(private analyzer: Analyzer, private printer: Printer) {}

  run(matches: MatchRow[]): void {
    const analysis: string = this.analyzer.runAnalysis(matches);
    this.printer.print(analysis);
  }
}
