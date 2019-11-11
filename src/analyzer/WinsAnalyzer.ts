import { Analyzer } from './../report';
import { MatchRow, MatchResult, MatchRowField } from './../match';

export class WinsAnalyzer implements Analyzer {
  constructor(private team: string) {}

  runAnalysis(matches: MatchRow[]): string {
    let wins: number = 0;

    for (let match of matches) {
      const wonAsLocal: boolean =
        match[MatchRowField.HomeTeam] === this.team &&
        match[MatchRowField.Result] === MatchResult.HomeWin;
      const wonAsAway: boolean =
        match[MatchRowField.AwayTeam] === this.team &&
        match[MatchRowField.Result] === MatchResult.AwayWin;

      if (wonAsLocal || wonAsAway) {
        wins++;
      }
    }

    return `${this.team} won ${wins} games last season`;
  }
}
