import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export class FirebaseService {

    constructor(
      public afs: AngularFirestore
    ){ }
  
      addUser(value){
        return new Promise<any>((resolve, reject) => {
          this.afs.collection('/users').add({
            username: value.username,
            email: value.email,
            password: value.password
          })
          .then(
            (res) => {
              resolve(res)
            },
            err => reject(err)
          )
        })
      }
  }
