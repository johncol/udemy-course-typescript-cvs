import fs from 'fs';
import { Printer } from './../report';

const REPORTS_FOLDER: string = './reports';

export class FilePrinter implements Printer {
  constructor(private path: string) {
    this.createReportsFolder();
  }

  print(analysis: string): void {
    fs.writeFileSync(`${REPORTS_FOLDER}/${this.path}`, analysis);
  }

  private createReportsFolder = (): void => {
    try {
      fs.mkdirSync(REPORTS_FOLDER);
    } catch (e) {
      // IGNORE as folder already exists
    }
  };
}
