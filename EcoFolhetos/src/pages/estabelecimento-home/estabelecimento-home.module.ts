import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstabelecimentoHomePage } from './estabelecimento-home';

@NgModule({
  declarations: [
    EstabelecimentoHomePage,
  ],
  imports: [
    IonicPageModule.forChild(EstabelecimentoHomePage),
  ],
})
export class EstabelecimentoHomePageModule {}
