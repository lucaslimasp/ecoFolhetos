import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultadoDaBuscaPage } from '../resultado-da-busca/resultado-da-busca';

@Component({
  selector: 'page-encontrar',
  templateUrl: 'encontrar.html'
})
export class EncontrarPage {

  constructor(public navCtrl: NavController) {
  }
  goToResultadoDaBusca(params){
    if (!params) params = {};
    this.navCtrl.push(ResultadoDaBuscaPage);
  }
}
