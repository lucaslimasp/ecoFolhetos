import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import {ContatosPage} from '../newpages/contatos/contatos';
import {UsuarioPage} from '../newpages/usuario/usuario';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contatosRoot = 'ContatosPage'
  usuarioRoot = 'UsuarioPage'

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }
  goToContatosPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContatosPage);
  
  }
  goToUsuarioPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(UsuarioPage);
  
  }
}
