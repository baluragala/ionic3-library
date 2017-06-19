import { AppHeaderComponentModule } from './../../components/app-header/app-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    AppHeaderComponentModule,
    FormsModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
