import jsonfile from 'jsonfile';

export class MockCtrlMock {

  private readonly dbFilePath = 'src/controllers/MockDb/MockDb.json';

  protected openDb(): Promise<any> {
    return jsonfile.readFile(this.dbFilePath);
  }

  protected saveDb(db: any): Promise<any> {
    return jsonfile.writeFile(this.dbFilePath, db);
  }
}