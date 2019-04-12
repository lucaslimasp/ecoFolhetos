
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../shared/models/user';
import {LogininicialPage} from'../logininicial/logininicial';
import {crud} from '../../services/crud';
import {FirebaseService} from '../../services/FirebaseService';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user = {} as User;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private afAuth: AngularFireAuth,
    public crud,
    public FirebaseService) {
  }
  signup(user: User) {
    try {
      const result = this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.crud.add(result);
        this.navCtrl.setRoot(LogininicialPage);
      }
    } catch (e) {
      console.error(e);
      alert("Informações incorretas");
    }
  }
}
