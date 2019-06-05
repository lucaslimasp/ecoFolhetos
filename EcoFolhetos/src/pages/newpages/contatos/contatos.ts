import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditContatosPage } from '../edit-contatos/edit-contatos';
import { ContactService } from '../../../provider/contact-service/contact-service';
import { AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {
  items: AngularFireList<any>;

  constructor(private navCtrl: NavController, private navParams: NavParams, private contactService: ContactService) {
    this.items = this.contactService.getAll();
  }

  newContact() {
    this.navCtrl.push(EditContatosPage);
  }

  editItem(item: any) {
    this.navCtrl.push(EditContatosPage, { contact: item });
  }

  removeItem(item: any) {
    this.contactService.remove(item);
  }

}
