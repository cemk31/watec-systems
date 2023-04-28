import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrinkwasseruntersuchungPageRoutingModule } from './trinkwasseruntersuchung-routing.module';

import { TrinkwasseruntersuchungPage } from './trinkwasseruntersuchung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrinkwasseruntersuchungPageRoutingModule
  ],
  declarations: [TrinkwasseruntersuchungPage]
})
export class TrinkwasseruntersuchungPageModule {}
