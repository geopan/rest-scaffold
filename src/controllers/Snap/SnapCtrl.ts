import { ISnap } from '@entities/Snap';


export interface ISnapCtrl {
  getOne: (email: string) => Promise<ISnap | null>;
  getAll: () => Promise<ISnap[]>;
  add: (snap: ISnap) => Promise<void>;
  update: (snap: ISnap) => Promise<void>;
  delete: (id: number) => Promise<void>;
}

class SnapCtrl implements ISnapCtrl {


  /**
   * @param email
   */
  public async getOne(email: string): Promise<ISnap | null> {
    // TODO
    return [] as any;
  }


  /**
   *
   */
  public async getAll(): Promise<ISnap[]> {
    // TODO
    return [] as any;
  }


  /**
   *
   * @param snap
   */
  public async add(snap: ISnap): Promise<void> {
    // TODO
    return {} as any;
  }


  /**
   *
   * @param snap
   */
  public async update(snap: ISnap): Promise<void> {
    // TODO
    return {} as any;
  }


  /**
   *
   * @param id
   */
  public async delete(id: number): Promise<void> {
    // TODO
    return {} as any;
  }
}

export default SnapCtrl;