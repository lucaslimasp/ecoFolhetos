import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstabelecimentoVerpromocoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estabelecimento-verpromocoes',
  templateUrl: 'estabelecimento-verpromocoes.html',
})
export class EstabelecimentoVerpromocoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoVerpromocoesPage');
  }

}
