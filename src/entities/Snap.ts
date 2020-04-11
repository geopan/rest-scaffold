
export interface ISnap {
  id: number;
  name: string;
  lat: number;
  lng: number;
  alt: number;
}

class Snap implements ISnap {

  public id: number;
  public name: string;
  public lat: number;
  public lng: number;
  public alt: number;

  constructor(nameOrSnap: string | ISnap, lat?: number, lng?: number, alt?: number, id?: number) {
    if (typeof nameOrSnap === 'string') {
      this.name = nameOrSnap;
      this.lat = lat || 0;
      this.lng = lng || 0;
      this.alt = alt || 0;
      this.id = id || -1;
    } else {
      this.name = nameOrSnap.name;
      this.lat = nameOrSnap.lat;
      this.lng = nameOrSnap.lng;
      this.alt = nameOrSnap.alt;
      this.id = nameOrSnap.id;
    }
  }
}

export default Snap;