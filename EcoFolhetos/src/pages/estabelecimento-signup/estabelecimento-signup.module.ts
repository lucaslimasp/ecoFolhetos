import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstabelecimentoSignupPage } from './estabelecimento-signup';

@NgModule({
  declarations: [
    EstabelecimentoSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(EstabelecimentoSignupPage),
  ],
})
export class EstabelecimentoSignupPageModule {}
