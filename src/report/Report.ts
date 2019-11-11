import { MatchRow } from '../match';

export interface Analyzer {
  runAnalysis(matches: MatchRow[]): string;
}

export interface Printer {
  print(analysis: string): void;
}

export class Report {
  constructor(private analyzer: Analyzer, private printer: Printer) {}

  run(matches: MatchRow[]): void {
    const analysis: string = this.analyzer.runAnalysis(matches);
    this.printer.print(analysis);
  }
}
