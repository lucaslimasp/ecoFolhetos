import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EncontrarPage } from '../pages/encontrar/encontrar';
import { DescontosObtidosPage } from '../pages/descontos-obtidos/descontos-obtidos';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PerfilPage } from '../pages/perfil/perfil';
import { QrCodePage } from '../pages/qr-code/qr-code';
import { ProximosDeVocPage } from '../pages/proximos-de-voc/proximos-de-voc';
import { LogininicialPage } from '../pages/logininicial/logininicial';
import { ResultadoDaBuscaPage } from '../pages/resultado-da-busca/resultado-da-busca';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EncontrarPage,
    DescontosObtidosPage,
    LoginPage,
    SignupPage,
    PerfilPage,
    QrCodePage,
    ProximosDeVocPage,
    LogininicialPage,
    ResultadoDaBuscaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EncontrarPage,
    DescontosObtidosPage,
    LoginPage,
    SignupPage,
    PerfilPage,
    QrCodePage,
    ProximosDeVocPage,
    LogininicialPage,
    ResultadoDaBuscaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}