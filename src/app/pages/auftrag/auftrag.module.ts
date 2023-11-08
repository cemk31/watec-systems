import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuftragPageRoutingModule } from './auftrag-routing.module';

import { AuftragPage } from './auftrag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuftragPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [AuftragPage]
})
export class AuftragPageModule {}
