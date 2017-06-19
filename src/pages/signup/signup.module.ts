import { AppHeaderComponentModule } from './../../components/app-header/app-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    AppHeaderComponentModule,
    FormsModule
  ],
  exports: [
    SignupPage
  ]
})
export class SignupPageModule {}
