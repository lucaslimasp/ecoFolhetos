import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupDBPage } from './signupDB';

@NgModule({
    declarations: [
        SignupDBPage,
    ],
    imports: [
        IonicPageModule.forChild(SignupDBPage),
    ],
})
export class SignupDBPageModule { }