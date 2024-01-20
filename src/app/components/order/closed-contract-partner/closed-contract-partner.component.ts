import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-closed-contract-partner',
  templateUrl: './closed-contract-partner.component.html',
  styleUrls: ['./closed-contract-partner.component.scss'],
})
export class ClosedContractPartnerComponent implements OnInit {

  closedContractPartnerForm: FormGroup;
  @Input() orderId: number;


  constructor(private orderService: OrderService, private fb: FormBuilder) {
    console.log("ClosedContractPartnerComponent");
   }

  ngOnInit() {    
    this.closedContractPartnerForm = this.fb.group({
      orderId: new FormControl({ value: this.orderId, disabled: false }),
      orderstatusType: new FormControl({ value: "", disabled: false }),
      closedContractPartnerTWAReason: new FormControl({ value: "", disabled: false }),
      deficiencyDescription: new FormControl({ value: "", disabled: false }),
      registrationHealthAuthoritiesOn: new FormControl({ value: "", disabled: false }),
      extraordinaryExpenditureReason: new FormControl({ value: "", disabled: false }),
      recordedSystem: this.fb.array([]),
      suppliedDocuments: this.fb.array([]),
      reportOrderStatusRequest: this.fb.array([]),
      contact: this.fb.array([]),
      property: this.fb.array([]),
      services: this.fb.array([]),
    }) as FormGroup;
  }

  closedContractPartnerFormSubmit() {
    console.log("closedContractParnterFormSubmit0");
  }

  //createRecordedSystem
  createRecordedSystem() {
    const recordedSystem = this.closedContractPartnerForm.get('recordedSystem') as FormArray;
    recordedSystem.push(this.fb.group({
      recordedSystem: new FormControl({ value: "", disabled: false }),
      recordedSystemDescription: new FormControl({ value: "", disabled: false }),
    }));
  }
  
  addRecordedSystem() {
    this.createRecordedSystem();
  }
}
