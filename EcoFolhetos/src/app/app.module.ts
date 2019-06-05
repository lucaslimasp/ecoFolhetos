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
import {AuthService} from '../provider/auth/auth-service';
import { ContactService } from '../provider/contact-service/contact-service';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { SigninPage } from '../pages/newpages/signin/signin';
import { SigninWithEmailPage } from '../pages//newpages/signinwithemail/signinwithemail';
import { ResetpasswordPage } from '../pages/newpages/resetpassword/resetpassword';
import { EditContatosPage } from '../pages/newpages/edit-contatos/edit-contatos';
import { ContatosPage } from '../pages/newpages/contatos/contatos';
import { UsuarioPage } from '../pages/newpages/usuario/usuario';

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
    ResultadoDaBuscaPage,
    EditarusuarioPage,
    SigninPage,
    SigninWithEmailPage,
    ResetpasswordPage,
    EditContatosPage,
    ContatosPage,
    UsuarioPage
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
    EncontrarPage,
    DescontosObtidosPage,
    LoginPage,
    SignupPage,
    PerfilPage,
    QrCodePage,
    ProximosDeVocPage,
    LogininicialPage,
    ResultadoDaBuscaPage,
    EditarusuarioPage,
    SigninPage,
    SigninWithEmailPage,
    ResetpasswordPage,
    EditContatosPage,
    ContatosPage,
    UsuarioPage
  ],
  providers: [
    userProvider,
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthService,
    ContactService,
    ImagePicker,
    GooglePlus,
    Facebook,
    TwitterConnect,
   ]
})
export class AppModule {}