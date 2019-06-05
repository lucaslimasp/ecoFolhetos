import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
 
@Injectable()
export class preferencesProvider {
  private PATH = 'preferencias/';
 
  constructor(private db: AngularFireDatabase) {
  }
 
  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('username'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }
 
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
 
  save(x: any) {
    return new Promise((resolve, reject) => {
      if (x.key) {
        this.db.list(this.PATH)
          .update(x.key, { username: x.username, email: x.email, password:x.password })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ username: x.username, email: x.email,password:x.password })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}