import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IstaOrderListPageRoutingModule } from './ista-order-list-routing.module';

import { IstaOrderListPage } from './ista-order-list.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IstaOrderListPageRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule 
  ],
  declarations: [IstaOrderListPage]
})
export class IstaOrderListPageModule {}
