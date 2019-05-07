import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { User } from '../../shared/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import {EditarusuarioPage} from './../editarusuario/editarusuario'
import { userProvider } from '../../provider/user/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  users: Observable<any>;
 
  constructor(public navCtrl: NavController, private provider: userProvider, private toast: ToastController,public navParams: NavParams,private afAuth: AngularFireAuth) {
    this.users = this.provider.getAll();
  }
  editContact(users: any) {

    this.navCtrl.push('EditarusuarioPage', { users:users });
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
  goToeditarUsuario(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EditarusuarioPage);
  }
}
