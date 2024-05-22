import { injectable } from 'inversify';
import { join } from 'path';
@injectable()
export class Config {
  public getCurrenciesPath(): string {
    return join(__filename, '..', 'currencies.json');
  }

  public getDatabaseUri(): string {
    return process.env['DATABASE_URI'] || 'mongodb://localhost:27017';
  }

  public getPort(): number {
    return parseInt(process.env['PORT'] || '8080');
  }
}
