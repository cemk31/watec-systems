import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ista-order-detail-twa',
  templateUrl: './ista-order-detail-twa.component.html',
  styleUrls: ['./ista-order-detail-twa.component.scss'],
})
export class IstaOrderDetailTwaComponent implements OnInit {

  closedContractPartner: any = {
    order: {
      number: null,
      remarkExternal: null,
      orderstatusType: null,
      setOn: null
    },
    orderStatusType: null,
    customerContacts: [],
    deficiencyDescription: null,
    extraordinaryExpenditureReason: null,
    suppliedDocuments: [],
    recordedSystem: [
      {

      }
    ]
  };
  response: any;

  order_no: any;


  constructor() { }

  ngOnInit() {
    this.addRecordedSystem();
    this.addDrinkingWaterHeater();
    this.addDocument();
  }

  addDrinkingWaterHeater() {
    console.log('addDrinkingWaterHeater');
  }

  addDocument() {
    console.log('addDocument');
  }

  addRecordedSystem() {
    console.log('addRecorderSystem');
  }

}
