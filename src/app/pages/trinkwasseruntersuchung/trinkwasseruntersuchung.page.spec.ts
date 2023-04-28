import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrinkwasseruntersuchungPage } from './trinkwasseruntersuchung.page';

describe('TrinkwasseruntersuchungPage', () => {
  let component: TrinkwasseruntersuchungPage;
  let fixture: ComponentFixture<TrinkwasseruntersuchungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrinkwasseruntersuchungPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrinkwasseruntersuchungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
