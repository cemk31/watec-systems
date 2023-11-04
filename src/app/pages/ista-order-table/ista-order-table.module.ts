import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IstaOrderTablePageRoutingModule } from './ista-order-table-routing.module';

import { IstaOrderTablePage } from './ista-order-table.page';
import { OrderTableComponent } from '../../components/order/order-table/order-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HighlightPipe } from '../../pipe/highlight.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IstaOrderTablePageRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  declarations: [IstaOrderTablePage, OrderTableComponent]
})
export class IstaOrderTablePageModule {}
