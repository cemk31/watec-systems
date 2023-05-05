import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuftragePageRoutingModule } from './auftrage-routing.module';

import { AuftragePage } from './auftrage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuftragePageRoutingModule
  ],
  declarations: [AuftragePage]
})
export class AuftragePageModule {}
