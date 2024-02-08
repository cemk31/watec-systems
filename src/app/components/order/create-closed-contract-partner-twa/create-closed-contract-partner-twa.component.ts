import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  FormControl,
} from "@angular/forms";
import { th } from "date-fns/locale";

@Component({
  selector: "app-create-closed-contract-partner-twa",
  templateUrl: "./create-closed-contract-partner-twa.component.html",
  styleUrls: ["./create-closed-contract-partner-twa.component.scss"],
})
export class CreateClosedContractPartnerTWAComponent implements OnInit {
  @Input() orderId: number;
  createClosedContractPartnerTWAForm: FormGroup;
  isSubmitted = false;
  recordedSystem: FormArray;

  constructor(private fb: FormBuilder) {
    // this.createClosedContractPartnerTWAForm = this.fb.group({
    //   orderId: Number(this.orderId),
    //   orderstatusType: [''], // entfernt "disabled: true"
    //   closedContractPartnerTWAReason: [''], // entfernt "disabled: true"
    //   deficiencyDescription: [''], // entfernt "disabled: true"
    //   registrationHealthAuthoritiesOn: [''], // entfernt "disabled: true"
    //   extraordinaryExpenditureReason: [''], // entfernt "disabled: true"
    //   suppliedDocuments: [''],
    //   recordedSystem: [''],
    //   reportOrderStatusRequest: [''],
    //   contact: [''],
    //   property: [''],
    //   services: [''],
    // });
  }

  ngOnInit() {
    this.createClosedContractPartnerTWAForm = this.fb.group({
      orderId: Number(this.orderId),
      orderstatusType: [""],
      closedContractPartnerTWAReason: [""],
      deficiencyDescription: new FormControl({ value: "", disabled: false }),
      registrationHealthAuthoritiesOn: [""],
      extraordinaryExpenditureReason: [""],
      suppliedDocuments: this.fb.array([]),
      recordedSystem: this.fb.array([]),
      reportOrderStatusRequest: this.fb.array([]),
      contact: this.fb.array([]),
      property: this.fb.array([]),
      services: this.fb.array([]),
    });
  }

  //drinkingWaterHeater
  createDrinkingWaterHeaterFormGroup(): FormGroup {
    return this.fb.group({
      consecutiveNumber: [""],
      inletTemperatureDisplayPresent: [""],
      inletTemperature: [""],
      outletTemperatureDisplayPresent: [""],
      outletTemperature: [""],
      pipeDiameterOutlet: [""],
      pipeMaterialtypeOutlet: [""],
      volumeLitre: [""],
      roomType: [""],
      roomPosition: [""],
      positionDetail: [""],

      unit: this.fb.array([]),
    });
  }

  //unit
  createUnitFormGroup(): FormGroup {
    return this.fb.group({
      floor: [""],
      storey: [""],
      position: [""], //number
      userName: [""],
      generalUnit: [""], //boolean
      buildingId: [""], //number
    });
  }

  createReportOrderStatusRequestFormGroup(): FormGroup {
    return this.fb.group({
      orderstatusType: [""],
      reportOrderStatusRequestReason: [""],
      reportOrderStatusRequestRemark: [""],
    });
  }
  //contact
  createContactFormGroup(): FormGroup {
    return this.fb.group({
      contactAttemptOn: [""],
      contactPersonCustomer: [""],
      agentCP: [""],
      result: [""],
      remark: [""],
    });
  }

  // drinkingWaterFacility
  creteDrinkingWaterFacilityFormGroup(): FormGroup {
    return this.fb.group({
      id: [""],
      consecutivNumber: [""],
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
      ascendingPipes: this.fb.array([this.createAscendingPipesFormGroup()]), //todo
      samplingPoints: this.fb.array([this.createSamplingPointsFormGroup()]), //todo
      // recordedSystems: this.fb.array([this.createRecordedSystemFormGroup()]), //todo
    });
  }

  // samplingPoints:
  createSamplingPointsFormGroup(): FormGroup {
    return this.fb.group({
      consecutiveNumber: [""],
      installationNumber: [""],
      numberObjectInstallationLocation: [""],
      pipingSystemType: [""],
      remoteSamplingPoint: [""],
      roomType: [""],
      roomPosition: [""],
      positionDetail: [""],
    });
  }

  // ascendingPipes:
  createAscendingPipesFormGroup(): FormGroup {
    return this.fb.group({
      id: [""],
      consecutivNumber: [""],
      ascendingPipeTemperatureDisplayPresent: [""],
      flowTemperature: [""],
      circulationTemperatureDisplayPresent: [""],
      circulationTemperature: [""],
      pipeDiameter: [""],
      pipeMaterialtype: [""],
    });
  }

  //recordedSystem:
  createRecordedSystemFormGroup(): FormGroup {
    return this.fb.group({
      id: [""],
      drinkingWaterFacility: this.fb.array([]),
    });
  }

  //services
  createServicesFormGroup(): FormGroup {
    return this.fb.group({
      articleNumber_ista: [""],
      quantity: ["", !Validators.required],
      unit: [""],
      extraordinaryExpenditure: [""],
      purchasePrice_ista: [""],
      warranty: [""],
      serviceRenderedIn: [""], //address
    });
  }

  createAddressFormGroup(): FormGroup {
    return this.fb.group({
      street: [""],
      streetNumber: [""],
      postCode: [""],
      zipCode: [""],
      city: [""],
    });
  }

  //property:
  createPropertyFormGroup(): FormGroup {
    return this.fb.group({
      hotwatersupplyType_central: [""],
      hotwatersupplyType_decentral: [""],
      recordedSystems: this.fb.array([this.createRecordedSystemFormGroup()]),
    });
  }

  //suppliedDocuments:
  createSuppliedDocumentsFormGroup(): FormGroup {
    return this.fb.group({
      documentName: [""],
      type: [""],
      content: [""],
      // documentFile: [''],
      // documentContent: [''],
    });
  }

  cancel() {
    console.log("Cancel");
  }

  // getRecordedSystemArray(): FormArray {
  //   return this.createClosedContractPartnerTWAForm.get('recordedSystem') as FormArray;
  // }

  get recordedSystemFormArray(): FormArray {
    if (this.createClosedContractPartnerTWAForm.get("recordedSystem") == null) {
      this.createClosedContractPartnerTWAForm.setControl(
        "recordedSystem",
        this.fb.array([])
      );
    }
    const recordedSystem = this.createClosedContractPartnerTWAForm.get(
      "recordedSystem"
    ) as FormArray;
    this.recordedSystem = recordedSystem;
    return recordedSystem;
  }

  getDrinkingWaterFacilityFormArray(groupIndex: number): FormArray {
    console.log("getDrinkingWaterFacilityFormArray");
    console.log("groupIndex: " + groupIndex);
    return this.recordedSystemFormArray
      ?.at(groupIndex)
      ?.get("drinkingWaterFacility") as FormArray;
  }

  getDrinkingWaterHeaterArrayForm(i: number, j: number): FormArray {
    this.recordedSystemFormArray.controls.forEach((element) => {
      element.get("drinkingWaterFacility")?.value.forEach((element) => {
        return (
          (element.get("drinkingWaterHeaters") as FormArray) ||
          this.fb.array([])
        );
      });
    });

    const drinkWaterFacility = this.recordedSystemFormArray
      ?.at(i)
      ?.get("drinkingWaterFacility") as FormArray;
    console.log("drinkWaterFacility: ", drinkWaterFacility);
    drinkWaterFacility.controls.forEach((element) => {
      if (element.get("id")?.value === j) {
        console.log("element: ", element);
        return (
          (element.get("drinkingWaterHeaters") as FormArray) ||
          this.fb.array([])
        );
      }
    });
    return (
      (drinkWaterFacility?.at(j)?.get("drinkingWaterHeaters") as FormArray) ||
      this.fb.array([])
    );
  }

  getUnitArrayForm(i: number, y: number, z: number): FormArray {
    const drinkingWaterHeaterArray = this.getDrinkingWaterHeaterArrayForm(i, y);
    console.log("drinkingWaterHeaterArray: ", drinkingWaterHeaterArray);
    return drinkingWaterHeaterArray.at(z).get("unit") as FormArray;
  }

  onChangeValue(event: any) {
    console.log("onChangeValue");
    console.log(event);
  }

  onClosedContractPartnerTWASubmit() {
    this.update();
    console.log(
      "createClosedContractPartnerTWAForm",
      this.createClosedContractPartnerTWAForm.value
    );
  }

  addRecordedSystem() {
    console.log("addRecordedSystem");
    if (this.recordedSystemFormArray === null) {
      this.createClosedContractPartnerTWAForm.setControl(
        "recordedSystem",
        this.fb.array([])
      );
    } else {
          this.recordedSystemFormArray.push(this.createRecordedSystemFormGroup());

    }
    console.log("recordedSystemFormArray: ", this.recordedSystemFormArray);
  }

  pushRecordedSystem() {
    console.log("pushRecordedSystem");
    if (this.recordedSystemFormArray === null) {
      this.createClosedContractPartnerTWAForm.setControl(
        "recordedSystem",
        this.fb.array([])
      );
    }
    this.recordedSystemFormArray.push(this.createRecordedSystemFormGroup());
    // this.createClosedContractPartnerTWAForm.patchValue({
    //   recordedSystem: this.recordedSystemFormArray.value,
    // });
    console.log("recordedSystemFormArray: ", this.recordedSystemFormArray);
  }

  addDrinkingWaterFacility(i: number) {
    console.log("addDrinkingWaterFacility", i);
    const drinkingWaterFacilityFormArray =
      this.getDrinkingWaterFacilityFormArray(i);
    drinkingWaterFacilityFormArray.controls.forEach((element) => {
      if (element.get("id")?.value === i) {
        console.log("element: ", element);
        (element as FormArray).push(this.creteDrinkingWaterFacilityFormGroup());
      }
    });
    drinkingWaterFacilityFormArray.push(
      this.creteDrinkingWaterFacilityFormGroup()
    );
    return drinkingWaterFacilityFormArray;
  }

  addDrinkingWaterHeater(i: number, j: number) {
    console.log("addDrinkingWaterHeater");
    const drinkingWaterHeaterFormArray = this.getDrinkingWaterHeaterArrayForm(
      i,
      j
    );
    if (drinkingWaterHeaterFormArray) {
      drinkingWaterHeaterFormArray.push(
        this.createDrinkingWaterHeaterFormGroup()
      );
      console.log(
        "drinkingWaterHeaterFormArray: ",
        drinkingWaterHeaterFormArray
      );
    } else {
      console.error("drinkingWaterHeaterFormArray is undefined");
    }
  }

  addUnit(i: number, y: number, z: number) {
    console.log("addUnit");
    const unitFormArray = this.getUnitArrayForm(i, y, z);
    unitFormArray.push(this.createUnitFormGroup());
    console.log("unitFormArray: ", unitFormArray);
  }

  resetForm() {
    this.createClosedContractPartnerTWAForm.reset();
  }

  removeDrinkingWaterHeater(i: number, j: number, k: number) {
    console.log("removeDrinkingWaterHeater");
    const drinkingWaterHeaterFormArray = this.getDrinkingWaterHeaterArrayForm(
      i,
      j
    );
    drinkingWaterHeaterFormArray.removeAt(k);
    console.log("drinkingWaterHeaterFormArray: ", drinkingWaterHeaterFormArray);
  }

  addDrinkingWaterHeaterAnalysis(i: number, j: number) {
    console.log("addDrinkingWaterHeaterAnalysis");
    const drinkingWaterHeaterFormArray = this.getDrinkingWaterHeaterArrayForm(
      i,
      j
    );
    drinkingWaterHeaterFormArray.push(
      this.createDrinkingWaterHeaterFormGroup()
    );
    console.log("drinkingWaterHeaterFormArray: ", drinkingWaterHeaterFormArray);
  }

  removeUnit(i: number, y: number, z: number, w: number) {
    console.log("removeUnit");
    const unitFormArray = this.getUnitArrayForm(i, y, z);
    unitFormArray.removeAt(w);
    console.log("unitFormArray: ", unitFormArray);
  }

  removeDrinkingWaterFacility(i: number, j: number) {
    console.log("removeDrinkingWaterFacility");
    const drinkingWaterFacilityFormArray =
      this.getDrinkingWaterFacilityFormArray(i);
    drinkingWaterFacilityFormArray.removeAt(j);
    this.update();
    console.log(
      "drinkingWaterFacilityFormArray: ",
      drinkingWaterFacilityFormArray
    );
  }

  removeRecordedSystem(i: number) {
    console.log("removeRecordedSystem", i);
    this.recordedSystemFormArray.removeAt(i);
    console.log("recordedSystemFormArray: ", this.recordedSystemFormArray);
  }

  update() {
    this.createClosedContractPartnerTWAForm.patchValue({
      recordedSystem: this.recordedSystemFormArray.value,
    });
  }
}
