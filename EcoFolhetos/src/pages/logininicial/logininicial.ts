import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProximosDeVocPage } from '../proximos-de-voc/proximos-de-voc';

@Component({
  selector: 'page-logininicial',
  templateUrl: 'logininicial.html'
})
export class LogininicialPage {

  constructor(public navCtrl: NavController) {
  }
  goToProximosDeVoc(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProximosDeVocPage);
  }
}
