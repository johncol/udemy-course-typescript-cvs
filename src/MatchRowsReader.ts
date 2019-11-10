import { MatchRow } from './MatchRow';
import { MatchResult } from './MatchResult';

export class MatchRowsMapper {
  map(data: string[][]): MatchRow[] {
    return data.map((rawRow: string[]) => {
      return [
        this.parseDate(rawRow[0]),
        rawRow[1],
        rawRow[2],
        parseInt(rawRow[3]),
        parseInt(rawRow[4]),
        rawRow[5] as MatchResult,
        rawRow[6]
      ];
    });
  }

  parseDate(rawDate: string): Date {
    const [day, month, year] = rawDate.split('/').map(parseInt);

    return new Date(year, month - 1, day);
  }
}
