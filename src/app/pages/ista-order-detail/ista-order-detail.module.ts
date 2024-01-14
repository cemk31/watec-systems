import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { IstaOrderReceivedFormComponent } from '../../components/ista-order-received-form/ista-order-received-form.component';
import { CreateReceivedComponent } from '../../components/order/create-received/create-received.component';
import { CreatePlannedComponent } from '../../components/order/create-planned/create-planned.component';
import { CreatePostponedComponent } from '../../components/order/create-postponed/create-postponed.component';
import { CreateCancelledComponent } from '../../components/order/create-cancelled/create-cancelled.component';
import { IstaOrderDetailTwaComponent } from '../../components/ista-order-detail-twa/ista-order-detail-twa.component';
import { IstaOrderDetailStatusComponent } from '../../components/ista-order-detail-status/ista-order-detail-status.component';
import { IstaOrderDetailGeneralComponent } from '../../components/ista-order-detail-general/ista-order-detail-general.component';
import { CreateRejectedComponent } from '../../components/order/create-rejected/create-rejected.component';
import { CreateExecutionOnSiteDoneComponent } from '../../components/order/create-execution-on-site-done/create-execution-on-site-done.component';
import { CreateClosedContractPartnerTWAComponent } from '../../components/order/create-closed-contract-partner-twa/create-closed-contract-partner-twa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IstaOrderDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IstaOrderDetailPage, 
    ClosedContractPartnerComponent, 
    ExecutionOnSiteDoneComponent, 
    ExecutionOnSiteNotPossibleComponent,
  PlannedComponent, PostponedComponent, RejectedComponent, CancelledComponent, 
  // ClosedContractPartnerComponent,
  ReceivedComponent, GeneralComponent, 
  CreateReceivedComponent, CreateExecutionOnSiteDoneComponent,CreateClosedContractPartnerTWAComponent,
  CreatePlannedComponent, CreatePostponedComponent, CreateCancelledComponent, IstaOrderDetailTwaComponent, IstaOrderDetailStatusComponent, IstaOrderDetailGeneralComponent, CreateRejectedComponent,
  IstaOrderDetailStatusComponent
],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class IstaOrderDetailPageModule {}
