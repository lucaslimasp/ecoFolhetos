import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
 
@Injectable()
export class userProvider {
  private PATH = 'users/';
 
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
 
  save(users: any) {
    return new Promise((resolve, reject) => {
      if (users.key) {
        this.db.list(this.PATH)
          .update(users.key, { username: users.username, email: users.email, password:users.password })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ username: users.username, email: users.email,password:users.password })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}