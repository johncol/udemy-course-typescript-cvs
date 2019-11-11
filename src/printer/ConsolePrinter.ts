import { Printer } from './../report';

export class ConsolePrinter implements Printer {
  print(analysis: string): void {
    console.log(analysis);
  }
}
