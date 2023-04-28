import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trinkwasseruntersuchung',
  templateUrl: './trinkwasseruntersuchung.page.html',
  styleUrls: ['./trinkwasseruntersuchung.page.scss'],
})
export class TrinkwasseruntersuchungPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.save();
    this.cancel();
    this.reset();
  }

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
