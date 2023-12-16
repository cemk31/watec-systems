import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ista-order-detail-status',
  templateUrl: './ista-order-detail-status.component.html',
  styleUrls: ['./ista-order-detail-status.component.scss'],
})
export class IstaOrderDetailStatusComponent {
  response: any;

  constructor() {
    // Initialize with dummy data or fetch from a service
    this.response = {
      CustomerContacts: {
        contactAttemptOn: '',
        contactPersonCustomer: '',
        agentCP: '',
        result: '',
        remark: '',
        // Initialize other properties
      },
      // Initialize other properties
    };
  }

  ngOnInit() {}

}
