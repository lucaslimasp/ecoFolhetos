/*
Teste a seguir codigo acima funcional

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LogininicialPage } from '../logininicial/logininicial';
import { AuthService } from '../../services/auth.service';

private auth: AuthService
@Component({
  selector: 'as-page-signup',
  templateUrl: './signup.html'
})
export class SignupPage {
  signupError: string;
  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private navCtrl: NavController
  ) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }
  signup() {
    let data = this.form.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signUp(credentials).then(
      () => this.navCtrl.setRoot(LogininicialPage),
      error => this.signupError = error.message
    );
  }
}
*/
