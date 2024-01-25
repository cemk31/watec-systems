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
  drinkingWaterFacility: FormArray = this.fb.array([]);
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
              id: [""],
              consecutiveNumber: new FormControl({ value: "", disabled: false }),
              usageType: [""],
              usageTypeOthers: [""],
              numberSuppliedUnits: [""],
              numberDrinkingWaterHeater: [""],
              totalVolumeLitres: [""],
              pipingSystemType_Circulation: [""],
              pipingSystemType_Waterbranchline: [""],
              pipingSystemType_Pipetraceheater: [""],
        
              deadPipeKnown: [""],
              deadPipesPosition: [""],
              numberAscendingPipes: [""],
              aerosolformation: [""],
              explanation: [""],
              numberSuppliedPersons: [""],
              pipeworkSchematicsAvailable: [""], //todo: boolean
              numberColdWaterLegs: [""], //number
              numberHotWaterLegs: [""], //number
              temperatureCirculationDWH_A: [""], //number
              temperatureCirculationDWH_B: [""], //number
              heatExchangerSystem_central: [""], //boolean
              heatExchangerSystem_districtheating: [""], //boolean
              heatExchangerSystem_continuousflowprinciple: [""], //boolean
              drinkingWaterHeaters: this.fb.array([
                this.fb.group({
                  id: [""],
                  consecutiveNumber: [""],
                  manufacturer: [""],
                  model: [""],
                  serialNumber: [""],
                  yearOfManufacture: [""],
                }),
              ]),
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

  //CLOSED CONTRACT PARTNER FORM
  closedContractPartnerFormSubmit() {
    console.log("closedContractParnterFormSubmit0");
    console.log(this.closedContractPartnerForm.value);
  }

  //RECORDED SYSTEM
  addRecordedSystem() {
    this.recordedSystemArray.push(
      this.fb.group({
        drinkingWaterFacility: this.fb.array([
          this.fb.group({
            id: [""],
            consecutiveNumber: new FormControl({ value: "", disabled: false }),
            usageType: [""],
            usageTypeOthers: [""],
            numberSuppliedUnits: [""],
            numberDrinkingWaterHeater: [""],
            totalVolumeLitres: [""],
            pipingSystemType_Circulation: [""],
            pipingSystemType_Waterbranchline: [""],
            pipingSystemType_Pipetraceheater: [""],
      
            deadPipeKnown: [""],
            deadPipesPosition: [""],
            numberAscendingPipes: [""],
            aerosolformation: [""],
            explanation: [""],
            numberSuppliedPersons: [""],
            pipeworkSchematicsAvailable: [""], //todo: boolean
            numberColdWaterLegs: [""], //number
            numberHotWaterLegs: [""], //number
            temperatureCirculationDWH_A: [""], //number
            temperatureCirculationDWH_B: [""], //number
            heatExchangerSystem_central: [""], //boolean
            heatExchangerSystem_districtheating: [""], //boolean
            heatExchangerSystem_continuousflowprinciple: [""], //boolean
      
            drinkingWaterHeaters: this.fb.array([
              
            ]), //todo
          }),
        ]),
      })
    );
  }

  removeRecordedSystem(index) {
    this.recordedSystemArray.removeAt(index);
  }

  get recordedSystemArray() {
    return this.closedContractPartnerForm.controls[
      "recordedSystem"
    ] as FormArray;
  }

  //DRINKING WATER FACILITY
  // @unused
  get drinkingWaterFacilityArray() {
    return this.recordedSystemArray.controls[
      "drinkingWaterFacility"
    ] as FormArray;
  }

  getDrinkingWaterFacilityArray(recordedSystemIndex: number): FormArray | null {
    if (!this.recordedSystemArray || recordedSystemIndex < 0 || recordedSystemIndex >= this.recordedSystemArray.length) {
      console.error(`recordedSystemArray is null or index ${recordedSystemIndex} is out of bounds for recordedSystemArray`);
      return null;
    }
    
    const recordedSystemGroup = this.recordedSystemArray.at(recordedSystemIndex) as FormGroup;
    if (!recordedSystemGroup) {
      console.error(`No FormGroup at index ${recordedSystemIndex} in recordedSystemArray`);
      return null;
    }
    
    const drinkingWaterFacilityArray = recordedSystemGroup.get('drinkingWaterFacility') as FormArray;
    if (!drinkingWaterFacilityArray) {
      console.error(`No drinkingWaterFacility FormArray in FormGroup at index ${recordedSystemIndex}`);
      return null;
    }
    
    return drinkingWaterFacilityArray;
  }

  addDrinkingWaterFacility(index: number) {
    const recordedSystemGroup = this.recordedSystemArray.at(index) as FormGroup;
    if (!recordedSystemGroup) {
      console.error(`No FormGroup at index ${index} in recordedSystemArray`);
      return;
    }

    const drinkingWaterFacilityArray = recordedSystemGroup.get('drinkingWaterFacility') as FormArray;
    if (!drinkingWaterFacilityArray) {
      recordedSystemGroup.addControl('drinkingWaterFacility', this.fb.array([]));
    }

    drinkingWaterFacilityArray.push(this.fb.group({
      id: [""],
      consecutiveNumber: [""],
      usageType: [""],
      usageTypeOthers: [""],
      numberSuppliedUnits: [""],
      numberDrinkingWaterHeater: [""],
      totalVolumeLitres: [""],
      pipingSystemType_Circulation: [""],
      pipingSystemType_Waterbranchline: [""],
      pipingSystemType_Pipetraceheater: [""],

      deadPipeKnown: [""],
      deadPipesPosition: [""],
      numberAscendingPipes: [""],
      aerosolformation: [""],
      explanation: [""],
      numberSuppliedPersons: [""],
      pipeworkSchematicsAvailable: [""], //todo: boolean
      numberColdWaterLegs: [""], //number
      numberHotWaterLegs: [""], //number
      temperatureCirculationDWH_A: [""], //number
      temperatureCirculationDWH_B: [""], //number
      heatExchangerSystem_central: [""], //boolean
      heatExchangerSystem_districtheating: [""], //boolean
      heatExchangerSystem_continuousflowprinciple: [""], //boolean

      drinkingWaterHeaters: this.fb.array([]), //todo
    }));
    console.log(this.closedContractPartnerForm.value);
  }

  deleteDrinkingWaterFacility(recordedSystemIndex: number, facilityIndex: number) {
    const recordedSystemGroup = this.recordedSystemArray.at(recordedSystemIndex) as FormGroup;
    if(!recordedSystemGroup) {
      console.error(`No FormGroup at index ${recordedSystemIndex} in recordedSystemArray`);
      return;
    }
    const drinkingWaterFacilityArray = recordedSystemGroup.get('drinkingWaterFacility') as FormArray;
    if(!drinkingWaterFacilityArray) {
      console.error(`No drinkingWaterFacility FormArray in FormGroup at index ${recordedSystemIndex}`);
      return;
    }
    drinkingWaterFacilityArray.removeAt(facilityIndex);
  }

  getDrinkingWaterHeaterArray(recordedSystemIndex: number, facilityIndex: number): FormArray {
    this.drinkingWaterFacility = this.getDrinkingWaterFacilityArray(recordedSystemIndex);
    if (!this.drinkingWaterFacility) {
      console.error(`No drinkingWaterFacility FormArray at index ${recordedSystemIndex}`);
      return null;
    }
    const drinkingWaterHeatersArray = this.drinkingWaterFacility.controls[facilityIndex].get('drinkingWaterHeaters') as FormArray;
    return drinkingWaterHeatersArray;
  }

  addDrinkWaterHeater(recordedSystemIndex: number, facilityIndex: number) {
    this.drinkingWaterFacility = this.getDrinkingWaterFacilityArray(recordedSystemIndex);
    console.log("drinkingWaterFacility", this.drinkingWaterFacility);
    const drinkingWaterHeatersArray = this.drinkingWaterFacility.controls[facilityIndex].get('drinkingWaterHeaters') as FormArray;
    drinkingWaterHeatersArray.push(
      this.fb.group({
        id: ["22"],
        consecutiveNumber: [""],
        manufacturer: [""],
        model: [""],
        serialNumber: [""],
        yearOfManufacture: [""],
      })
    );
  }


  //CONTACT
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
    return this.closedContractPartnerForm.controls["customers"] as FormArray;
  }

  addCustomer() {
    const customerForm = this.fb.group({
      test: new FormControl({ value: "", disabled: false }),
    });
    this.customers.push(customerForm);
    console.log("customers", this.customers);
  }

  removeCustomer(index) {
    this.customers.removeAt(index);
  }
}
