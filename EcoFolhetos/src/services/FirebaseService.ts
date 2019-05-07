import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ToastController } from 'ionic-angular';
import { Component, NgModule } from '@angular/core';

export declare class FirebaseServiceModule {
  constructor(parentModule: FirebaseService);
}
export class FirebaseService {
  
    constructor(
      public afs: AngularFirestore,
      public FirebaseService : FirebaseService,
      public toastCtrl: ToastController
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
