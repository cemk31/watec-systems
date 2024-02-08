import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgottenPasswordPage } from './forgotten-password-page';
import { IonicModule } from '@ionic/angular';
import { Routes } from '@angular/router';
import { ForgottenPasswordComponent } from '../../components/login/forgotten-password/forgotten-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgottenPasswordPageRoutingModule } from './forgotten-password-routing.module';


const routes: Routes = [
  {
    path: '',
    component: ForgottenPasswordPage
  }
];

@NgModule({
  declarations: [
    ForgottenPasswordPage, ForgottenPasswordComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ForgottenPasswordPageRoutingModule
  ]
})
export class ForgottenPasswordPageModule { }
