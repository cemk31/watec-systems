import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trinkwasseruntersuchung',
  templateUrl: './trinkwasseruntersuchung.page.html',
  styleUrls: ['./trinkwasseruntersuchung.page.scss'],
})

export class TrinkwasseruntersuchungPage implements OnInit {

  abkuerzungen = [
    {
      "abkuerzung": "WE",
      "erklaerung": "Wohneinheiten"
    },
    {
      "abkuerzung": "GE",
      "erklaerung": "Gebäudeeinheiten"
    },
    {
      "abkuerzung": "TrinkwV",
      "erklaerung": "Trinkwasserverordnung"
    },
    {
      "abkuerzung": "PWH",
      "erklaerung": "Potable Water Hot (Trinkwasser Warm)"
    },
    {
      "abkuerzung": "PWC",
      "erklaerung": "Potable Water Cold (Trinkwasser Kalt)"
    },
    {
      "abkuerzung": "PWH-C",
      "erklaerung": "Potable Water Hot-Circulation (Zirkulation)"
    },
    {
      "abkuerzung": "MW",
      "erklaerung": "Mischwasser aus PWH und PWC"
    },
    {
      "abkuerzung": "Pos",
      "erklaerung": "Positionsnummer"
    },
    {
      "abkuerzung": "Hnr",
      "erklaerung": "Hausnummer"
    },
    {
      "abkuerzung": "Chem",
      "erklaerung": "Chemie"
    },
    {
      "abkuerzung": "Mikrobio",
      "erklaerung": "Mikrobiologie"
    },
    {
      "abkuerzung": "Legio",
      "erklaerung": "Legionellen"
    },
    {
      "abkuerzung": "BD",
      "erklaerung": "Bad"
    },
    {
      "abkuerzung": "WT",
      "erklaerung": "Waschtisch"
    },
    {
      "abkuerzung": "Du",
      "erklaerung": "Dusche"
    },
    {
      "abkuerzung": "BW",
      "erklaerung": "Badewanne"
    },
    {
      "abkuerzung": "WM",
      "erklaerung": "Waschmaschine"
    },
    {
      "abkuerzung": "SPM",
      "erklaerung": "Spülmaschine"
    },
    {
      "abkuerzung": "AB",
      "erklaerung": "Ausgussbecken"
    },
    {
      "abkuerzung": "BD",
      "erklaerung": "Bidet"
    },
    {
      "abkuerzung": "KW",
      "erklaerung": "Kaltwasser"
    },
    {
      "abkuerzung": "PN",
      "erklaerung": "Probenahme"
    },
    {
      "abkuerzung": "PP/PE",
      "erklaerung": "Rohrart aus Kunststoff"
    },
    {
      "abkuerzung": "Verbund",
      "erklaerung": "Metallverbundrohr"
    },
    {
      "abkuerzung": "kW",
      "erklaerung": "Kilowatt"
    },
    {
      "abkuerzung": "SSV",
      "erklaerung": "Schrägsitzventil"
    },
    {
      "abkuerzung": "water.svg",
      "erklaerung": "water.svg"
    },
    {
      "abkuerzung": "GWC",
      "erklaerung": "Gäste-WC"
    },
    {
      "abkuerzung": "GBD",
      "erklaerung": "Gäste-Bad"
    },
    {
      "abkuerzung": "Kü",
      "erklaerung": "Küche"
    },
    {
      "abkuerzung": "Sp",
      "erklaerung": "Spüle"
    },
    {
      "abkuerzung": "SV",
      "erklaerung": "Sicherheitsventil"
    },
    {
      "abkuerzung": "RV",
      "erklaerung": "Rückschlagventil"
    },
    {
      "abkuerzung": "RFV",
      "erklaerung": "Rückflussverhinderer"
    },
    {
      "abkuerzung": "AG",
      "erklaerung": "Ausdehnungsgefäß"
    }
]

    inspektionsintervalle = [
      {
        "nr": 1,
        "bauteil": "Ungehinderter freier Auslauf (AA)",
        "Normbezug": "EN 13076",
        "Inspektion": "Halbjährlich",
        "Wartung": "Halbjährlich"
      },
      {
        "nr": 2,
        "bauteil": "Freier Auslauf mit nicht kreisförmigem Überlauf (uneingeschränkt) (AB)",
        "Normbezug": "EN 13077",
        "Inspektion": "Halbjährlich",
        "Wartung": "Halbjährlich"
      },
      {
        "nr": 3,
        "bauteil": "Freier Auslauf mit belüftetem Tauchrohr und Überlauf (AC)",
        "Normbezug": "EN 13078",
        "Inspektion": "Jährlich",
        "Wartung": "Halbjährlich"
      },
      {
        "nr": 4,
        "bauteil": "Freier Auslauf mit Injektor (AD)",
        "Normbezug": "EN 13079",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 5,
        "bauteil": "Freier Auslauf mit kreisförmigem Überlauf (eingeschränkt) (AF)",
        "Normbezug": "EN 14622",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 6,
        "bauteil": "Freier Auslauf mit kreisförmigem Überlauf mit Mindestdurchmesser (Nachweis durch Prüfung oder Messung) (AG)",
        "Normbezug": "EN 14623",
        "Inspektion": "Halbjährlich",
        "Wartung": "Halbjährlich"
      },
      {
        "nr": 7,
        "bauteil": "Systemtrenner mit kontrollierbarer druckreduzierter Zone (BA)",
        "Normbezug": "EN 12729",
        "Inspektion": "Jährlich",
        "Wartung": "Halbjährlich"
      },
      {
        "nr": 8,
        "bauteil": "Systemtrenner mit unterschiedlichen nicht kontrollierbaren Druckzonen (CA)",
        "Normbezug": "EN 14367",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 9,
        "bauteil": "Rohrbelüfter in Durchgangform (DA)",
        "Normbezug": "EN 14451",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 10,
        "bauteil": "Rohrunterbrecher mit Lufteintrittsöffnung und beweglichem Teil (DB)",
        "Normbezug": "EN 14452",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 11,
        "bauteil": "Rohrunterbrecher mit ständig geöffneten Lufteintrittsöffnungen (DC)",
        "Normbezug": "EN 14453",
        "Inspektion": "Jährlich",
        "Wartung": "Halbjährlich"
      },
      {
        "nr": 12,
        "bauteil": "Kontrollierbarer Rückflussverhinderer (EA)",
        "Normbezug": "EN 13959",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 13,
        "bauteil": "Nicht kontrollierbarer Rückflussverhinderer (EB)",
        "Normbezug": "EN 13959",
        "Inspektion": "Jährlich",
        "Wartung": "Austausch alle 10 Jahre"
      },
      {
        "nr": 14,
        "bauteil": "Kontrollierbarer Doppelrückflussverhinderer (EC)",
        "Normbezug": "EN 13959",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 15,
        "bauteil": "Nicht kontrollierbarer Doppelrückflussverhinderer (ED)",
        "Normbezug": "EN 13959",
        "Inspektion": "Jährlich",
        "Wartung": "Austausch alle 10 Jahre"
      },
      {
        "nr": 16,
        "bauteil": "Rohrtrenner, nicht durchflussgesteuert (GA)",
        "Normbezug": "EN 13433",
        "Inspektion": "Halbjährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 17,
        "bauteil": "Rohrtrenner, durchflussgesteuert (GB)",
        "Normbezug": "EN 13434",
        "Inspektion": "Halbjährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 18,
        "bauteil": "Schlauchanschluss mit Rückflussverhinderer (HA)",
        "Normbezug": "EN 14454",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 19,
        "bauteil": "Brauseschlauchanschluss mit Rohrbelüfter (HB)",
        "Normbezug": "EN 15096",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 20,
        "bauteil": "Automatischer Umsteller (HC)",
        "Normbezug": "EN 14506",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 21,
        "bauteil": "Rohrbelüfter für Schlauchanschlüsse, kombiniert mit Rückflussverhinderer (HD)",
        "Normbezug": "EN 15096",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 22,
        "bauteil": "Druckbeaufschlagter Belüfter (LA)",
        "Normbezug": "EN 14455",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 23,
        "bauteil": "Druckbeaufschlagter Belüfter, kombiniert mit nachgeschaltetem Rückflussverhinderer (LB)",
        "Normbezug": "EN 14455",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 24,
        "bauteil": "Hydraulische Sicherheitsgruppe",
        "Normbezug": "EN 1487",
        "Inspektion": "Halbjährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 25,
        "bauteil": "Sicherheitsgruppe für Expansionswasser",
        "Normbezug": "EN 1488",
        "Inspektion": "Halbjährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 26,
        "bauteil": "Sicherheitsventil",
        "Normbezug": "EN 1489",
        "Inspektion": "Halbjährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 27,
        "bauteil": "Kombiniertes Druck-Temperaturventil",
        "Normbezug": "EN 1490",
        "Inspektion": "Halbjährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 28,
        "bauteil": "Sicherheitsventil für Expansionswasser",
        "Normbezug": "EN 1491",
        "Inspektion": "Halbjährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 29,
        "bauteil": "Druckminderer",
        "Normbezug": "EN 1567",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 30,
        "bauteil": "Thermostatischer Mischer für Warmwasserbereiter",
        "Normbezug": "EN 15092",
        "Inspektion": "Halbjährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 31,
        "bauteil": "Druckerhöhungspumpe",
        "Normbezug": "EN 806-2",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 32,
        "bauteil": "Filter, rückspülbar (80 um bis 150 Mm)",
        "Normbezug": "EN 806-4",
        "Inspektion": "Halbjährlich",
        "Wartung": "Halbjährlich"
      },
      {
        "nr": 33,
        "bauteil": "Filter, nicht rückspülbar (80 um bis 150 m)",
        "Normbezug": "EN 13443-1",
        "Inspektion": "Halbjährlich",
        "Wartung": "Halbjährlich"
      },
      {
        "nr": 34,
        "bauteil": "Filter (< 80 um)",
        "Normbezug": "EN 13443-1",
        "Inspektion": "Halbjährlich",
        "Wartung": "Halbjährlich"
      },
      {
        "nr": 35,
        "bauteil": "Dosiersystem",
        "Normbezug": "EN 13443-2",
        "Inspektion": "Alle 2 Monate",
        "Wartung": "Alle 2 Monate"
      },
      {
        "nr": 36,
        "bauteil": "Enthärter",
        "Normbezug": "EN 14812",
        "Inspektion": "Alle 2 Monate",
        "Wartung": "Alle 2 Monate"
      },
      {
        "nr": 37,
        "bauteil": "Elektrolytische Dosierungsanlage mit Aluminiumanoden",
        "Normbezug": "EN 15848",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 38,
        "bauteil": "Filter mit aktiven Substanzen",
        "Normbezug": "EN 14898",
        "Inspektion": "Alle 2 Monate",
        "Wartung": "Alle 2 Monate"
      },
      {
        "nr": 39,
        "bauteil": "Membranfilteranlage",
        "Normbezug": "EN 14652",
        "Inspektion": "Alle 2 Monate",
        "Wartung": "Alle 2 Monate"
      },
      {
        "nr": 40,
        "bauteil": "Gerät mit Quecksilberdampf-Niederdruckstrahlern",
        "Normbezug": "EN 14897",
        "Inspektion": "Alle 2 Monate",
        "Wartung": "Alle 2 Monate"
      },
      {
        "nr": 41,
        "bauteil": "Nitratentfernungsanlage",
        "Normbezug": "EN 15219",
        "Inspektion": "Alle 2 Monate",
        "Wartung": "Alle 2 Monate"
      },
      {
        "nr": 42,
        "bauteil": "Wassererwärmer",
        "Normbezug": "EN 12897",
        "Inspektion": "Alle 2 Monate",
        "Wartung": "Alle 2 Monate"
      },
      {
        "nr": 43,
        "bauteil": "Leitungsanlage",
        "Normbezug": "EN 806-2",
        "Inspektion": "Jährlich",
        "Wartung": "Jährlich"
      },
      {
        "nr": 44,
        "bauteil": "Wasserzähler, kalt",
        "Normbezug": "EN 806-4",
        "Inspektion": "Jährlich",
        "Wartung": "Alle 6 Jahre"
      },
      {
        "nr": 45,
        "bauteil": "Wasserzähler, warm",
        "Normbezug": "MID 111",
        "Inspektion": "Halbjährlich",
        "Wartung": "Alle 5 Jahre"
      }
    ]

  constructor() { }

  ngOnInit() {
    this.save();
    this.cancel();
    this.reset();
    this.abkuerzungen.sort((a,b) =>
      a.abkuerzung.localeCompare(b.abkuerzung));
    };

  save() {
    // Hier kannst du den Code für das Speichern des Formulars schreiben
    console.log('Speichern gedrückt');
  }
  
  cancel() {
    // Hier kannst du den Code für das Abbrechen des Formulars schreiben
    console.log('Abbrechen gedrückt');
  }
  
  reset() {
    // Hier kannst du den Code für das Zurücksetzen des Formulars schreiben
    console.log('Zurücksetzen gedrückt');
  }

}
