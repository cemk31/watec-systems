import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-closed-contract-partner',
  templateUrl: './closed-contract-partner.component.html',
  styleUrls: ['./closed-contract-partner.component.scss'],
})
export class ClosedContractPartnerComponent implements OnInit {

  response: any;

  order_no: string = '12345'; // Beispiel für eine Bestellnummer, ersetzen Sie dies durch tatsächliche Daten.
  closedContractPartner: any = {
    order: {
      number: null,
      remarkExternal: null,
      orderstatusType: null,
      setOn: null
    },
    customerContacts: [],
    deficiencyDescription: null,
    extraordinaryExpenditureReason: null,
    suppliedDocuments: [],
    recordedSystem: [
      {
        
      }
    ]
  };

  addDocument() {
    // Logik zum Hinzufügen eines neuen Dokuments
  }

  addDrinkingWaterHeater() {
    // Logik zum Hinzufügen eines neuen Trinkwassererhitzers
  }

  addRecordedSystem() {
    // Logik zum Hinzufügen eines neuen aufgezeichneten Systems
  }

  heater: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getData().subscribe((data) => {
      this.response = data;
      console.log(this.response);
    });
    this.closedContractPartner = {};
  }

}
