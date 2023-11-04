import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order/order.service';

@Component({
  selector: 'app-closed-contract-partner',
  templateUrl: './closed-contract-partner.component.html',
  styleUrls: ['./closed-contract-partner.component.scss'],
})
export class ClosedContractPartnerComponent implements OnInit {

  response: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getData().subscribe((data) => {
      this.response = data;
      console.log(this.response);
    });
  }

}
