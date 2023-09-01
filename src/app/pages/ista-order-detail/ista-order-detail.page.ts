import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Route } from "@angular/router";

@Component({
  selector: "app-ista-order-detail",
  templateUrl: "./ista-order-detail.page.html",
  styleUrls: ["./ista-order-detail.page.scss"],
})
export class IstaOrderDetailPage implements OnInit {
  id: string;
  
  closedContractPartner = {
    order: {
      number: "B2023-0001",
      remarkExternal: "Bemerkung zur Bestellung.",
    },
    orderstatusType: "In Bearbeitung",
    setOn: new Date().toISOString(),
    customerContacts: [
      {
        customerContactAttemptOn: new Date().toISOString(),
        contactPersonCustomer: "Max Mustermann",
        agentCP: "Agent 001",
        result: "Erfolgreich",
        remark: "Keine Bemerkungen.",
      },
      // ... Sie können mehr Einträge hier hinzufügen
    ],
    deficiencyDescription: "Beschreibung des Mangels...",
    extraordinaryExpenditureReason: "Grund für außergewöhnlichen Aufwand...",
    suppliedDocuments: [
      {
        type: "Rechnung",
        content: "Rechnung für März 2023.",
      },
      {
        type: "Vertrag",
        content: "Vertrag mit Lieferant X.",
      },
      // ... Sie können mehr Einträge hier hinzufügen
    ],
    recordedSystem: [
      {
        drinkingWaterFacility: {
          consecutiveNumber: 1,
          usageType: "Gewerblich",
          heatExchangerSystem_central: true,
          heatExchangerSystem_districtheating: false,
          heatExchangerSystem_continuousflowprinciple: true,
          drinkingWaterHeaters: [
            {
              consecutiveNumber: 1,
              // ... Andere Eigenschaften ...
              unit: {
                floor: "EG",
                storey: "1. OG",
                building: {
                  address: {
                    street: "Musterstraße 123",
                  },
                },
              },
            },
          ],
        },
      },
    ],
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

    // Methode zum Hinzufügen von Dokumenten
  addDocument() {
    this.closedContractPartner.suppliedDocuments.push({
      type: '',
      content: ''
    });
  }

  addDrinkingWaterHeater() {
    // Nehmen wir an, Sie möchten einen Erhitzer zum ersten `drinkingWaterFacility` im `recordedSystem` Array hinzufügen.
    // Wenn Sie es zu einem anderen Element hinzufügen möchten, ändern Sie den Index entsprechend.
    this.closedContractPartner.recordedSystem[0].drinkingWaterFacility.drinkingWaterHeaters.push({
      consecutiveNumber: null,
      // outletTemperatureDisplayPresent: false,
      // outletTemperature: null,
      // volumeLitre: null,
      // roomType: '',
      // roomPosition: null,
      // positionDetail: '',
      // pipeDiameterOutlet: '',
      // pipeMaterialtypeOutlet: '',
      unit: {
        floor: '',
        storey: '',
        building: {
          address: {
            street: ''
            // ... Andere Adressfelder hier ...
          }
        }
      }
    });
  }
  
  addRecordedSystem() {
    this.closedContractPartner.recordedSystem.push({
      drinkingWaterFacility: {
        consecutiveNumber: null,
        usageType: '',
        heatExchangerSystem_central: false,
        heatExchangerSystem_districtheating: false,
        heatExchangerSystem_continuousflowprinciple: false,
        drinkingWaterHeaters: [],
      },
    });
  }
  

}
