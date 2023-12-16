import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {

  orderForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      propertyNumber: ['', Validators.required],
      company: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      mobile: ['', Validators.required],
      fax: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required],
      remarkExternal: ['', Validators.required],
      Received: this.fb.array([this.initReceived()])
    });
  }

  initReceived(): FormGroup {
    return this.fb.group({
      orderstatusType: ['', Validators.required],
      CustomerContacts: this.fb.array([this.initCustomerContacts()])
    });
  }

  initCustomerContacts(): FormGroup {
    return this.fb.group({
      contactAttemptOn: ['', Validators.required],
      contactPersonCustomer: ['', Validators.required],
      agentCP: ['', Validators.required],
      result: ['', Validators.required],
      remark: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.orderForm.invalid) {
      return;
    }
    // Do something with the form values
    console.log(this.orderForm.value);
  }

  transferToIsta(): void {
    // Logic to transfer data to ISTA
  }

  // Convenience getters for easy access to form fields
  get receivedFormArray(): FormArray {
    return this.orderForm.get('Received') as FormArray;
  }

  getCustomerContactsFormArray(receivedIndex: number): FormArray {
    return this.receivedFormArray.at(receivedIndex).get('CustomerContacts') as FormArray;
  }

}
