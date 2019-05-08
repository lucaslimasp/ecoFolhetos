import { Component, NgModule, ViewChild } from '@angular/core';
import { IonicPage,NavController, NavParams, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { User } from '../../shared/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProximosDeVocPage } from '../proximos-de-voc/proximos-de-voc';
import { userProvider } from '../../provider/user/user';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  users: Observable<any>;
  user = {} as User;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private afAuth: AngularFireAuth,
    private provider: userProvider,
    private toast: ToastController
    ) {
      this.users = this.provider.getAll();
      console.log(this.users);
     }
     newContact() {
      this.navCtrl.push('ContactEditPage');
    }
   
    editContact(contact: any) {
      // Maneira 1
      this.navCtrl.push('ContactEditPage', { contact: contact });
   
      // Maneira 2
      // this.navCtrl.push('ContactEditPage', { key: contact.key });
    }
   
    removeContact(key: string) {
      if (key) {
        this.provider.remove(key)
          .then(() => {
            this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
          })
          .catch(() => {
            this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
          });
      }
    }
  login(user: User) {
    try {
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(ProximosDeVocPage);
      }
    }
    catch (e) {
      console.error(e);
      alert("Usuario Invalido");
    }
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }
}
