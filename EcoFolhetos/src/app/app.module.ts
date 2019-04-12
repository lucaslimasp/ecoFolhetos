import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Events } from 'ionic-angular';
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
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseConfig } from './FirebaseConfig';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaseService } from '../services/FirebaseService';


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
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig.fire),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
   ]
})
export class AppModule {}