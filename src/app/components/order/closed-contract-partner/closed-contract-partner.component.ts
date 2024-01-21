import { Component, Input, OnInit } from "@angular/core";
import { OrderService } from "../../../services/order/order.service";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-closed-contract-partner",
  templateUrl: "./closed-contract-partner.component.html",
  styleUrls: ["./closed-contract-partner.component.scss"],
})
export class ClosedContractPartnerComponent implements OnInit {
  closedContractPartnerForm: FormGroup;
  services: FormArray = this.fb.array([
    this.fb.group({
      articleNumber_ista: new FormControl({ value: "", disabled: false }),
      quantity: new FormControl({ value: "", disabled: false }),
      unit: new FormControl({ value: "", disabled: false }),
      extraordinaryExpenditure: new FormControl({ value: "", disabled: false }),
      purchasePrice_ista: new FormControl({ value: "", disabled: false }),
      warranty: new FormControl({ value: "", disabled: false }),
      street: new FormControl({ value: "ss", disabled: false }),
    }),
  ]);
  @Input() orderId: number;

  constructor(private orderService: OrderService, private fb: FormBuilder) {}

  ngOnInit() {
    this.closedContractPartnerForm = this.fb.group({
      orderId: new FormControl({ value: this.orderId, disabled: false }),
      orderstatusType: new FormControl({ value: "", disabled: false }),
      closedContractPartnerTWAReason: new FormControl({
        value: "",
        disabled: false,
      }),
      deficiencyDescription: new FormControl({ value: "", disabled: false }),
      registrationHealthAuthoritiesOn: new FormControl({
        value: "",
        disabled: false,
      }),
      extraordinaryExpenditureReason: new FormControl({
        value: "",
        disabled: false,
      }),
      recordedSystem: this.fb.array([
        this.fb.group({
          drinkingWaterFacility: this.fb.array([
            this.fb.group({
              test: new FormControl({ value: "", disabled: false }),
            }),
          ]),
        }),
      ]),
      suppliedDocuments: this.fb.array([]),
      contact: this.fb.group({
        contactAttemptOn: new FormControl({ value: "", disabled: false }),
        contactPersonCustomer: new FormControl({ value: "", disabled: false }),
        agentCP: new FormControl({ value: "", disabled: false }),
        result: new FormControl({ value: "", disabled: false }),
        remark: new FormControl({ value: "", disabled: false }),
      }),
      property: this.fb.group({
        hotwatersupplyType_central: new FormControl({
          value: false,
          disabled: false,
        }),
        hotwatersupplyType_decentral: new FormControl({
          value: false,
          disabled: false,
        }),
      }),
      services: this.fb.group({
        articleNumber_ista: new FormControl({ value: "", disabled: false }),
        quantity: new FormControl({ value: "", disabled: false }),
        unit: new FormControl({ value: "", disabled: false }),
        extraordinaryExpenditure: new FormControl({
          value: false,
          disabled: false,
        }),
        purchasePrice_ista: new FormControl({ value: "", disabled: false }),
        warranty: new FormControl({ value: true, disabled: false }),
        street: new FormControl({ value: "", disabled: false }),
        streetnumber: new FormControl({ value: "", disabled: false }),
        postcode: new FormControl({ value: "", disabled: false }),
        city: new FormControl({ value: "", disabled: false }),
        country: new FormControl({ value: "", disabled: false }),
      }),
      customers: this.fb.array([
        this.fb.group({
          test: new FormControl({ value: "", disabled: false }),
        }),
      ]),
    });
  }

  closedContractPartnerFormSubmit() {
    console.log("closedContractParnterFormSubmit0");
    console.log(this.closedContractPartnerForm.value);
  }

  //createRecordedSystem
  createRecordedSystem() {
    this.recordedSystemArray.push(
      this.fb.group({
        drinkingWaterFacility: this.fb.array([
          this.fb.group({
            test: new FormControl({ value: "", disabled: false }),
          }),
        ]),
      })
    );
  }

  addRecordedSystem() {
    this.createRecordedSystem();
  }

  get recordedSystemArray() {
    return this.closedContractPartnerForm.controls[
      "recordedSystem"
    ] as FormArray;
  }

  get contactArray() {
    return this.closedContractPartnerForm.controls["contact"] as FormArray;
  }

  addContact() {
    const contactForm = this.fb.group({
      contactAttemptOn: new FormControl({ value: "", disabled: false }),
      contactPersonCustomer: new FormControl({ value: "", disabled: false }),
      agentCP: new FormControl({ value: "ss", disabled: false }),
      result: new FormControl({ value: "", disabled: false }),
      remark: new FormControl({ value: "", disabled: false }),
    });
    this.contactArray.push(contactForm);
  }

  deleteContact(index) {
    this.contactArray.removeAt(index);
  }

  get customers() {
    return this.closedContractPartnerForm.controls['customers'] as FormArray;
  }

  addCustomer() {
    const customerForm = this.fb.group({
      test: new FormControl({ value: "", disabled: false }),
    });
    this.customers.push(customerForm);
    console.log(this.customers);
  }
}
