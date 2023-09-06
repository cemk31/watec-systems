import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IstaOrderDetailPageRoutingModule } from './ista-order-detail-routing.module';

import { IstaOrderDetailPage } from './ista-order-detail.page';
import { CancelledComponent } from '../../components/order/cancelled/cancelled.component';
import { ClosedContractPartnerComponent } from '../../components/order/closed-contract-partner/closed-contract-partner.component';
import { ExecutionOnSiteDoneComponent } from '../../components/order/execution-on-site-done/execution-on-site-done.component';
import { ExecutionOnSiteNotPossibleComponent } from '../../components/order/execution-on-site-not-possible/execution-on-site-not-possible.component';
import { PlannedComponent } from '../../components/order/planned/planned.component';
import { PostponedComponent } from '../../components/order/postponed/postponed.component';
import { RejectedComponent } from '../../components/order/rejected/rejected.component';
import { GeneralComponent } from '../../components/order/general/general.component';
import { ReceivedComponent } from '../../components/order/received/received.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IstaOrderDetailPageRoutingModule,
  ],
  declarations: [IstaOrderDetailPage, ClosedContractPartnerComponent, ExecutionOnSiteDoneComponent, ExecutionOnSiteNotPossibleComponent,
  PlannedComponent, PostponedComponent, RejectedComponent, CancelledComponent, ClosedContractPartnerComponent,ReceivedComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class IstaOrderDetailPageModule {}
