import { Component, NgModule, ViewChild } from '@angular/core';
import { IonicPage,NavController, NavParams, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { User } from '../../shared/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProximosDeVocPage } from '../proximos-de-voc/proximos-de-voc';
import { userProvider } from '../../provider/user/user';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(ProximosDeVocPage);
      }
    }
    catch (e) {
      console.error(e);
      alert("Usuario Invalido");
    }
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }
}
