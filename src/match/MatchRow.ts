import { MatchResult } from './MatchResult';

export type Team = string;
export type Score = number;
export type Referee = string;
export type MatchRow = [Date, Team, Team, Score, Score, MatchResult, Referee];

export enum MatchRowField {
  Date,
  HomeTeam,
  AwayTeam,
  HomeScore,
  AwayScore,
  Result,
  Referee
}
