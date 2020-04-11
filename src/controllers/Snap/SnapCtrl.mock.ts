import { ISnap } from '@entities/Snap';
import { getRandomInt } from '@shared/functions';
import { MockCtrlMock } from '../MockDb/MockCtrl.mock';
import { ISnapCtrl } from './SnapCtrl';


class SnapCtrl extends MockCtrlMock implements ISnapCtrl {


  public async getOne(email: string): Promise<ISnap | null> {
    try {
      const db = await super.openDb();
      for (const snap of db.snaps) {
        if (snap.email === email) {
          return snap;
        }
      }
      return null;
    } catch (err) {
      throw err;
    }
  }


  public async getAll(): Promise<ISnap[]> {
    try {
      const db = await super.openDb();
      return db.snaps;
    } catch (err) {
      throw err;
    }
  }


  public async add(snap: ISnap): Promise<void> {
    try {
      const db = await super.openDb();
      snap.id = getRandomInt();
      db.snaps.push(snap);
      await super.saveDb(db);
    } catch (err) {
      throw err;
    }
  }


  public async update(snap: ISnap): Promise<void> {
    try {
      const db = await super.openDb();
      for (let i = 0; i < db.snaps.length; i++) {
        if (db.snaps[i].id === snap.id) {
          db.snaps[i] = snap;
          await super.saveDb(db);
          return;
        }
      }
      throw new Error('Snap not found');
    } catch (err) {
      throw err;
    }
  }


  public async delete(id: number): Promise<void> {
    try {
      const db = await super.openDb();
      for (let i = 0; i < db.snaps.length; i++) {
        if (db.snaps[i].id === id) {
          db.snaps.splice(i, 1);
          await super.saveDb(db);
          return;
        }
      }
      throw new Error('Snap not found');
    } catch (err) {
      throw err;
    }
  }
}

export default SnapCtrl;