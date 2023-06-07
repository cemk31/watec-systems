import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuftragDetailPageRoutingModule } from './auftrag-detail-routing.module';

import { AuftragDetailPage } from './auftrag-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuftragDetailPageRoutingModule
  ],
  declarations: [AuftragDetailPage]
})
export class AuftragDetailPageModule {}
