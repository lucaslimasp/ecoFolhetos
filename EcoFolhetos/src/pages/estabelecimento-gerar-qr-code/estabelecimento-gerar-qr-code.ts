import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstabelecimentoGerarQrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estabelecimento-gerar-qr-code',
  templateUrl: 'estabelecimento-gerar-qr-code.html',
})
export class EstabelecimentoGerarQrCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoGerarQrCodePage');
  }

}
