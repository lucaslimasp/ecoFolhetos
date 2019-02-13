import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EncontrarPage } from '../pages/encontrar/encontrar';
import { ResultadoDaBuscaPage } from '../pages/resultado-da-busca/resultado-da-busca';
import { DescontosObtidosPage } from '../pages/descontos-obtidos/descontos-obtidos';
import { PerfilPage } from '../pages/perfil/perfil';
import { QrCodePage } from '../pages/qr-code/qr-code';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProximosDeVocPage } from '../pages/proximos-de-voc/proximos-de-voc';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToEncontrar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EncontrarPage);
  }goToResultadoDaBusca(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ResultadoDaBuscaPage);
  }goToDescontosObtidos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DescontosObtidosPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToQrCode(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QrCodePage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToProximosDeVoc(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProximosDeVocPage);
  }
}
