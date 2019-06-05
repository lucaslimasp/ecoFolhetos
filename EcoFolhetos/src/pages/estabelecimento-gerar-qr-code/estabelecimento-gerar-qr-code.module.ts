import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstabelecimentoGerarQrCodePage } from './estabelecimento-gerar-qr-code';

@NgModule({
  declarations: [
    EstabelecimentoGerarQrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(EstabelecimentoGerarQrCodePage),
  ],
})
export class EstabelecimentoGerarQrCodePageModule {}
