import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuftragPageRoutingModule } from './auftrag-routing.module';

import { AuftragPage } from './auftrag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuftragPageRoutingModule
  ],
  declarations: [AuftragPage]
})
export class AuftragPageModule {}
