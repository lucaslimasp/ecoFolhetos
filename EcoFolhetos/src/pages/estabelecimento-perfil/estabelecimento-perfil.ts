import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EstabelecimentoVerpromocoesPage} from '../estabelecimento-verpromocoes/estabelecimento-verpromocoes';
/**
 * Generated class for the EstabelecimentoPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estabelecimento-perfil',
  templateUrl: 'estabelecimento-perfil.html',
})
export class EstabelecimentoPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoPerfilPage');
  }
  goToPromocoes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EstabelecimentoVerpromocoesPage);
  }
}
