import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { type } from 'os';
//import { text } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html'
})
export class QrCodePage {

  constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner) {

   }
   Escanear(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
  Gerar(){
   /* 
   this.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
      console.log("encode success: " + success);
     }, function(fail) {
       console.log("encoding failed: " + fail);
     }
     */
     this.barcodeScanner.encode("http://www.nytimes.com","http://www.nytimes.com").then (barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
