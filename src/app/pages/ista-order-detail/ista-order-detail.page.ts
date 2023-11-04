import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { OrderService } from "../../services/order/order.service";
import { Location } from '@angular/common';

@Component({
  selector: "app-ista-order-detail",
  templateUrl: "./ista-order-detail.page.html",
  styleUrls: ["./ista-order-detail.page.scss"],
})
export class IstaOrderDetailPage implements OnInit {

  orderNumber: string;
  currentStatus: string | null = null;
  currentStatusColor: string;
  statusType: string;
  setOn: string;
  createdAt: string;
  updatedAt: string;
  currentStatusIndex: number = 0;
  statuses: string[] = ['RECEIVED', 'PLANNED', 'POSTPONED', 'CANCELLED'];
  showStatusMenu = false;
  segmentVisible: boolean = false;

  statusList = [];

  id: string;
  exceptionMessage = null;
  opened = "";
  // public response = { id: null, createdAt: null }; // oder ein initialer Wert
  response = null;
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

  toggleStatusMenu() {
    this.showStatusMenu = !this.showStatusMenu;
  }

  changeStatus(newStatus: string) {
    this.currentStatusIndex = this.statuses.indexOf(newStatus);
    this.createComponent(newStatus);  // Methode zum Erstellen einer leeren Komponente
    this.showStatusMenu = false;
  }

  createComponent(status: string) {
    if (status === 'RECEIVED' || status === 'PLANNED' || status === 'CANCELLED' || status === 'POSTPONED') {
      this.segmentVisible = true;
    }
    // Implementiere die Logik zur Erstellung einer leeren Komponente mit dem gegebenen Status
  }

  refreshData() {
    // Implementiere die Aktualisieren-Funktionalität
  }

  setStatus(status: string) {
    this.currentStatus = status;
    this.segmentVisible = true;
  }

  constructor(private http: HttpClient, private route: ActivatedRoute, private orderService: OrderService, private router: Router, private location: Location) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.orderNumber = this.id;
    console.log(this.id);
    this.getIstaOrderDetail();
    this.orderService.signalInit();
  }

  // Methode zum Hinzufügen von Dokumenten
  addDocument() {
    this.closedContractPartner.suppliedDocuments.push({
      type: "",
      content: "",
    });
  }

  addDrinkingWaterHeater() {
    // Nehmen wir an, Sie möchten einen Erhitzer zum ersten `drinkingWaterFacility` im `recordedSystem` Array hinzufügen.
    // Wenn Sie es zu einem anderen Element hinzufügen möchten, ändern Sie den Index entsprechend.
    this.closedContractPartner.recordedSystem[0].drinkingWaterFacility.drinkingWaterHeaters.push(
      {
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
          floor: "",
          storey: "",
          building: {
            address: {
              street: "",
              // ... Andere Adressfelder hier ...
            },
          },
        },
      }
    );
  }

  addRecordedSystem() {
    this.closedContractPartner.recordedSystem.push({
      drinkingWaterFacility: {
        consecutiveNumber: null,
        usageType: "",
        heatExchangerSystem_central: false,
        heatExchangerSystem_districtheating: false,
        heatExchangerSystem_continuousflowprinciple: false,
        drinkingWaterHeaters: [],
      },
    });
  }

  getIstaOrderDetail() {
    // Abrufen der ID aus dem Route-Parameter
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);

    // Abrufen der Daten vom Server
    const url = `${environment.backend + environment.url.ista.order}/${
      this.id
    }`;
    console.log(url);

    const accessToken = sessionStorage.getItem("access_token");
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.append("Authorization", `Bearer ${accessToken}`);
    }
    this.http
      .get<any[]>(url, { headers })
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        }),
        catchError((error) => {
          this.exceptionMessage = error.error.message;
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.response = data; // Hier setzen Sie den Wert für 'response'
        // this.sortComponentsByDate();  // Sortierung nach dem Erhalten der Daten
        this.orderService.setData(data);
      });
  }

  sortComponentsByDate() {
    // Statuswerte in der Reihenfolge, wie sie sortiert werden sollen
    const statusOrder = ['Rejected', 'ClosedContractPartner', 'NotPossible', 'Received', 'Postponed'];
  
    // Sortiere den response Array
    this.response.sort((a, b) => {
      // Vergleiche Statuswerte
      const orderA = statusOrder.indexOf(a.status);
      const orderB = statusOrder.indexOf(b.status);
  
      if (orderA < orderB) {
        return -1;
      }
      if (orderA > orderB) {
        return 1;
      }
  
      // Wenn die Statuswerte gleich sind, sortiere nach Datum
      const dateA = a.updatedAt || a.createdAt;
      const dateB = b.updatedAt || b.createdAt;  
    });
  
    // Nach der Sortierung, erstelle die statusList
    this.statusList = this.response.map(component => component.updatedAt || component.createdAt);
  }

  toggleSegmentVisibility() {
    this.segmentVisible = !this.segmentVisible;
  }

  goBack() {
    this.location.back();
  }


  @Input() orderId: number;
  @Output() formSubmit = new EventEmitter<string>();

  details: string;

  onSubmit() {
    this.formSubmit.emit(this.details);
  }

  onFormSubmit(details: string) {
    console.log('Formular Details: ', details);
    // Hier können Sie weitere Aktionen mit den Formulardetails durchführen
  }
  
}
