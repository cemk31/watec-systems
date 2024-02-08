import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuftragDetailPageRoutingModule } from './auftrag-detail-routing.module';

import { AuftragDetailPage } from './auftrag-detail.page';
import { IstaOrderReceivedFormComponent } from '../../components/ista-order-received-form/ista-order-received-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuftragDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuftragDetailPage, IstaOrderReceivedFormComponent]
})
export class AuftragDetailPageModule {}
