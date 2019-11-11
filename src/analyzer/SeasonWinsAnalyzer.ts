import { Analyzer } from './../report';
import { WinsAnalyzer } from './WinsAnalyzer';
import { MatchRow, MatchRowField, Team } from './../match';

export class SeasonWinsAnalyzer implements Analyzer {
  runAnalysis(matches: MatchRow[]): string {
    let analysis: string = 'SEASON WINS REPORT\n';

    this.teamsIn(matches)
      .filter((team: Team) => !!team)
      .map((team: Team) => new WinsAnalyzer(team))
      .map((analyzer: Analyzer) => analyzer.runAnalysis(matches))
      .forEach((teamAnalysis: string) => (analysis += ` - ${teamAnalysis}\n`));

    return analysis;
  }

  private teamsIn = (matches: MatchRow[]): Team[] => {
    const teams: Set<Team> = new Set();
    this.addTeamsToSet(matches, teams, MatchRowField.HomeTeam);
    this.addTeamsToSet(matches, teams, MatchRowField.AwayTeam);
    return Array.from(teams);
  };

  private addTeamsToSet = (
    matches: MatchRow[],
    teams: Set<Team>,
    teamIndex: MatchRowField.HomeTeam | MatchRowField.AwayTeam
  ): void => {
    matches
      .map((row: MatchRow) => row[teamIndex])
      .forEach((team: Team) => teams.add(team));
  };
}
