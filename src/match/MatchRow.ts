import { MatchResult } from './MatchResult';

type Team = string;
type Score = number;
type Referee = string;

export type MatchRow = [Date, Team, Team, Score, Score, MatchResult, Referee];
