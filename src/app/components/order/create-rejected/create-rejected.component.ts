import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-rejected',
  templateUrl: './create-rejected.component.html',
  styleUrls: ['./create-rejected.component.scss'],
})
export class CreateRejectedComponent implements OnInit {
  @Input() orderId: number;
  createRejectedForm: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder) {

   }

  ngOnInit() {
    this.createRejectedForm = this.fb.group({
      orderId: Number(this.orderId),  
      orderstatusType: [''],  // entfernt "disabled: true"
      rejectedReason: [''],  // entfernt "disabled: true"
      rejectedReasonText: [''],  // entfernt "disabled: true"
    });
  }

  onSubmitRejected() {
    console.log(this.createRejectedForm.value);
  }

  cancel() {
    console.log('Cancel');
  }
}
