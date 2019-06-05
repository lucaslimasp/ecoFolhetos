import { Component, NgModule, ViewChild } from '@angular/core';
import { IonicPage,NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../shared/models/user';
import {LogininicialPage} from'../logininicial/logininicial';
import { userProvider } from '../../provider/user/user';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstabelecimentoHomePage } from '../estabelecimento-home/estabelecimento-home';
import {passwordvalidator} from './passwordvalidator';
@IonicPage()
@Component({
  selector: 'page-estabelecimento-signup',
  templateUrl: 'estabelecimento-signup.html',
})
export class EstabelecimentoSignupPage {
  @ViewChild('myNav') nav: NavController;
  public rootPage:any = EstabelecimentoHomePage;
  title: string;
  form: FormGroup;
  users: any;
  user = {} as User;
  constructor(public navCtrl: NavController, 
    private provider : userProvider,
    private toast:ToastController,
    private formBuilder: FormBuilder,
    public navParams: NavParams, 
    private afAuth: AngularFireAuth) {
      this.users = this.navParams.data.users || { };
      this.createForm();
      this.setupPageTitle();
  }
  private setupPageTitle() {
    this.title = this.navParams.data.users ? 'Usuario' : 'Novo Estabelecimento';
  }
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.users.key],
      username: [this.users.username, Validators.required],
      email: [this.users.email, Validators.required],
      password: [this.users.password, Validators.required],
      repassword: [this.users.repassword, Validators.required]
    },{
      validator: passwordvalidator.validate.bind(this)
    }
    );
  }
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'usuario salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.setRoot(EstabelecimentoHomePage);
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o usuario.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoSignupPage');
  }

}
