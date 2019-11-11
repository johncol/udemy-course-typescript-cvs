import { MatchResult } from './MatchResult';

export type Team = string;
export type Score = number;
export type Referee = string;
export type MatchRow = [Date, Team, Team, Score, Score, MatchResult, Referee];

export enum MatchRowField {
  Date = 0,
  HomeTeam = 1,
  AwayTeam = 2,
  HomeScore = 3,
  AwayScore = 4,
  Result = 5,
  Referee = 6
}
