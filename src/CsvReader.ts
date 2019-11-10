import fs from 'fs';

export class CsvReader {
  constructor(private filename: string) {}

  read(): string[][] {
    return fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string) => row.split(','));
  }
}
