import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {FirebaseService} from './FirebaseService';
import { ToastController } from 'ionic-angular';
export class crud {

    constructor(
      public afs: AngularFirestore,
      public FirebaseService:FirebaseService,
      public toastCtrl: ToastController
    ){ }

add(value){
    this.FirebaseService.addUser(value)
    .then( res => {
      let toast = this.toastCtrl.create({
        message: 'User was created successfully',
        duration: 3000
      });
      toast.present();
      //this.resetFields();
    }, err => {
      console.log(err)
    })
  }
}