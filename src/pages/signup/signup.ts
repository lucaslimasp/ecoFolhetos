
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../shared/models/user';
import {LogininicialPage} from'../logininicial/logininicial';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }
  signup(user: User) {
    try {
      const result = this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot(LogininicialPage);
      }
    } catch (e) {
      console.error(e);
      alert("Informações incorretas");
    }
  }
}
