import {EstabelecimentoSignupPage} from '../estabelecimento-signup/estabelecimento-signup';
import { Component, NgModule, ViewChild } from '@angular/core';
import { IonicPage,NavController, NavParams, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { User } from '../../shared/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProximosDeVocPage } from '../proximos-de-voc/proximos-de-voc';
import { userProvider } from '../../provider/user/user';
import { Observable } from 'rxjs/Observable';
import {EstabelecimentoLoginInicialPage} from '../estabelecimento-login-inicial/estabelecimento-login-inicial';
@IonicPage()
@Component({
  selector: 'page-estabelecimento-home',
  templateUrl: 'estabelecimento-home.html',
})
export class EstabelecimentoHomePage {
  user = {} as User;
  users: Observable<any>;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private afAuth: AngularFireAuth,
    private provider: userProvider,
    private toast: ToastController
    ) {
      this.users = this.provider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoHomePage');
  }
  login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(EstabelecimentoLoginInicialPage);
      }
    }catch (e) {
      console.error(e);
      alert("Usuario Invalido");
    }
  }
  goToEstabelecimentoSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EstabelecimentoSignupPage);
  }
  
}
