import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-execution-on-site-done',
  templateUrl: './create-execution-on-site-done.component.html',
  styleUrls: ['./create-execution-on-site-done.component.scss'],
})
export class CreateExecutionOnSiteDoneComponent implements OnInit {

  @Input() orderId: number;
  createExecutionOnSiteForm: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createExecutionOnSiteForm = this.fb.group({
      orderId: Number(this.orderId),
      orderstatusType: [''], // entfernt "disabled: true"
      executionOnSiteDoneReason: [''], // entfernt "disabled: true"
    });
  }

  onExecutionOnSiteDoneSubmit() {
    console.log(this.createExecutionOnSiteForm.value);
  }

  cancel() {
    console.log('Cancel');
  }
}