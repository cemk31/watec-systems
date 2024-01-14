import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-closed-contract-partner-twa',
  templateUrl: './create-closed-contract-partner-twa.component.html',
  styleUrls: ['./create-closed-contract-partner-twa.component.scss'],
})
export class CreateClosedContractPartnerTWAComponent implements OnInit {

  @Input() orderId: number;
  createClosedContractPartnerTWAForm: FormGroup;
  isSubmitted = false;

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

  //drinkingWaterHeater
  createDrinkingWaterHeaterFormGroup(): FormGroup {
    return this.fb.group({
      consecutiveNumber: [''],
      inletTemperatureDisplayPresent: [''],
      inletTemperature: [''],
      outletTemperatureDisplayPresent: [''],
      outletTemperature: [''],
      pipeDiameterOutlet: [''],
      pipeMaterialtypeOutlet: [''],
      volumeLitre: [''],
      roomType: [''],
      roomPosition: [''],
      positionDetail: [''],

      unit: this.fb.array([this.createUnitFormGroup()]),
    });
  }
  

  //unit
  createUnitFormGroup(): FormGroup {
    return this.fb.group({
      floor: [''],
      storey: [''],
      position: [''], //number
      userName: [''],
      generalUnit: [''], //boolean
      buildingId: [''], //number
    });
  }

  createReportOrderStatusRequestFormGroup(): FormGroup {
    return this.fb.group({
      orderstatusType: [''],
      reportOrderStatusRequestReason: [''],
      reportOrderStatusRequestRemark: [''],
    });
  }
  //contact
  createContactFormGroup(): FormGroup {
    return this.fb.group({
      contactAttemptOn: [''],
      contactPersonCustomer: [''],
      agentCP: [''],
      result: [''],
      remark: ['']
    });
  }

  // drinkingWaterFacility
  creteDrinkingWaterFacilityFormGroup(): FormGroup {
    return this.fb.group({
      id : [''],
      consecutivNumber: [''],
      usageType: [''],
      usageTypeOthers: [''],
      numberSuppliedUnits: [''],
      numberDrinkingWaterHeater: [''],
      totalVolumeLitres: [''], 
      pipingSystemType_Circulation: [''],
      pipingSystemType_Waterbranchline: [''],
      pipingSystemType_Pipetraceheater: [''],

      deadPipeKnown: [''],
      deadPipesPosition: [''],
      numberAscendingPipes: [''],
      aerosolformation: [''],
      explanation: [''],
      numberSuppliedPersons: [''],
      pipeworkSchematicsAvailable: [''], //todo: boolean
      numberColdWaterLegs: [''], //number
      numberHotWaterLegs: [''], //number
      temperatureCirculationDWH_A: [''], //number
      temperatureCirculationDWH_B: [''], //number
      heatExchangerSystem_central: [''], //boolean
      heatExchangerSystem_districtheating: [''], //boolean
      heatExchangerSystem_continuousflowprinciple: [''], //boolean

      drinkingWaterHeaters: this.fb.array([this.createDrinkingWaterHeaterFormGroup()]), //todo
      ascendingPipes: this.fb.array([this.createAscendingPipesFormGroup()]), //todo
      samplingPoints: this.fb.array([this.createSamplingPointsFormGroup()]), //todo
      // recordedSystems: this.fb.array([this.createRecordedSystemFormGroup()]), //todo
    });
  }

  // samplingPoints:
  createSamplingPointsFormGroup(): FormGroup {
    return this.fb.group({
      consecutiveNumber: [''],
      installationNumber: [''],
      numberObjectInstallationLocation: [''],
      pipingSystemType: [''],
      remoteSamplingPoint: [''],
      roomType: [''],
      roomPosition: [''],
      positionDetail: [''],
    });
  }

  // ascendingPipes:
  createAscendingPipesFormGroup(): FormGroup {
    return this.fb.group({
      id: [''],
      consecutivNumber: [''],
      ascendingPipeTemperatureDisplayPresent: [''],
      flowTemperature: [''],
      circulationTemperatureDisplayPresent: [''],
      circulationTemperature: [''],
      pipeDiameter: [''],
      pipeMaterialtype: [''],
    });
  }

  //recordedSystem:
  createRecordedSystemFormGroup(): FormGroup {
    return this.fb.group({
      id: [''],
      drinkingWaterFacility: this.fb.array([this.creteDrinkingWaterFacilityFormGroup()]),
    });
  }

  //services
  createServicesFormGroup(): FormGroup {
    return this.fb.group({
      articleNumber_ista: [''],
      quantity: ['', !Validators.required],
      unit: [''],
      extraordinaryExpenditure: [''],
      purchasePrice_ista: [''],
      warranty: [''],
      serviceRenderedIn: [''], //address
    });
  }

  createAddressFormGroup(): FormGroup {
    return this.fb.group({
      street: [''],
      streetNumber: [''],
      postCode: [''],
      zipCode: [''],
      city: [''],
    });
  }

  //property:
  createPropertyFormGroup(): FormGroup {
    return this.fb.group({
      hotwatersupplyType_central: [''],
      hotwatersupplyType_decentral: [''],
      recordedSystems: this.fb.array([this.createRecordedSystemFormGroup()]),
    });
  }

  //suppliedDocuments: 
  createSuppliedDocumentsFormGroup(): FormGroup {
    return this.fb.group({
      documentName: [''],
      type: [''],
      content: [''],
      // documentFile: [''],
      // documentContent: [''],
    });
  } 

  cancel() {
    console.log('Cancel');
  }

  // getRecordedSystemArray(): FormArray {
  //   return this.createClosedContractPartnerTWAForm.get('recordedSystem') as FormArray;
  // }

  get recordedSystemFormArray(): FormArray {
    return this.createClosedContractPartnerTWAForm.get('recordedSystem') as FormArray;
  }

  getDrinkingWaterFacilityFormArray(groupIndex: number): FormArray {
    console.log('getDrinkingWaterFacilityFormArray');
    console.log('groupIndex: ' + groupIndex);
    return this.recordedSystemFormArray.at(groupIndex).get('drinkingWaterFacility') as FormArray;
  }

  getDrinkingWaterHeaterArrayForm(i: number, j: number): FormArray {
    console.log('getDrinkingWaterHeaterArrayForm');
    console.log('i: ' + i);
    console.log('j: ' + j);
    return (this.recordedSystemFormArray.at(i).get('drinkingWaterFacility') as FormArray).at(j).get('drinkingWaterHeaters') as FormArray;
  }

  // addThirdLevelItem(outerIndex: number, innerIndex: number): void {
  //   const thirdLevelFormArray = this.getThirdLevelArrayForm(outerIndex, innerIndex);
  //   thirdLevelFormArray.push(this.createThirdLevelFormGroup());
  // }

  // removeThirdLevelItem(outerIndex: number, innerIndex: number, thirdIndex: number): void {
  //   const thirdLevelFormArray = this.getThirdLevelArrayForm(outerIndex, innerIndex);
  //   thirdLevelFormArray.removeAt(thirdIndex);
  // }
    getUnitArrayForm(i: number, y: number, z: number): FormArray {
      const drinkingWaterHeaterArray = this.getDrinkingWaterHeaterArrayForm(i, y);
      return drinkingWaterHeaterArray.at(z).get('unit') as FormArray;
    }

    ngOnInit() {
      this.createClosedContractPartnerTWAForm = this.fb.group({
        orderId: Number(this.orderId),
        orderstatusType: [''], // entfernt "disabled: true"
        closedContractPartnerTWAReason: [''], // entfernt "disabled: true"
        deficiencyDescription: [''], // entfernt "disabled: true"
        registrationHealthAuthoritiesOn: [''], // entfernt "disabled: true"
        extraordinaryExpenditureReason: [''], // entfernt "disabled: true"
        suppliedDocuments: this.fb.array([this.createSuppliedDocumentsFormGroup()]),
        recordedSystem: this.fb.array([this.createRecordedSystemFormGroup()]),
        reportOrderStatusRequest: this.fb.array([this.createReportOrderStatusRequestFormGroup()]),
        contact: this.fb.array([this.createContactFormGroup()]),
        property: this.fb.array([this.createPropertyFormGroup()]),
        services: this.fb.array([this.createServicesFormGroup()]),
      });
      this.createClosedContractPartnerTWAForm.reset();
      this.createClosedContractPartnerTWAForm.setValue({ 
        orderId: Number(this.orderId),
      });
      console.log("orderId: " + this.orderId);
    
    }

    onChangeValue(event: any) {
      console.log("onChangeValue");
      console.log(event);

    }

    onClosedContractPartnerTWASubmit() {
      console.log("createClosedContractPartnerTWAForm", this.createClosedContractPartnerTWAForm.value);

    }
}