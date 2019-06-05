import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstabelecimentoLoginInicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estabelecimento-login-inicial',
  templateUrl: 'estabelecimento-login-inicial.html',
})
export class EstabelecimentoLoginInicialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoLoginInicialPage');
  }

}
