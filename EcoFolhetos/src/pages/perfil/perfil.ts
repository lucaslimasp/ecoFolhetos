import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../shared/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
/*firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid);
  }
});*/
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
 /* user = {} as User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private afAuth: AngularFireAuth) {
    
    var user = user.username;
  }
  getUser(user:User){
   // const result = this.afAuth.user
  }
 // FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();
 // String uid = user.getUid();
 */
}
