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
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseConfig } from './FirebaseConfig';
import {userProvider} from '../provider/user/user';
import {EditarusuarioPage} from '../pages/editarusuario/editarusuario';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {EstabelecimentoLoginInicialPage} from '../pages/estabelecimento-login-inicial/estabelecimento-login-inicial'
import {EstabelecimentoHomePage} from '../pages/estabelecimento-home/estabelecimento-home'
import {EstabelecimentoSignupPage} from '../pages/estabelecimento-signup/estabelecimento-signup'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EstabelecimentoLoginInicialPage,
    EstabelecimentoHomePage,
    EncontrarPage,
    DescontosObtidosPage,
    LoginPage,
    SignupPage,
    EstabelecimentoSignupPage,
    PerfilPage,
    QrCodePage,
    ProximosDeVocPage,
    LogininicialPage,
    ResultadoDaBuscaPage,
    EditarusuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig.fire),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EstabelecimentoLoginInicialPage,
    EstabelecimentoHomePage,
    EncontrarPage,
    DescontosObtidosPage,
    LoginPage,
    SignupPage,
    EstabelecimentoSignupPage,
    PerfilPage,
    QrCodePage,
    ProximosDeVocPage,
    LogininicialPage,
    ResultadoDaBuscaPage,
    EditarusuarioPage
  ],
  providers: [
    userProvider,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
   ]
})
export class AppModule {}