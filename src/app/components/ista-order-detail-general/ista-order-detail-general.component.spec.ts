import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IstaOrderDetailGeneralComponent } from './ista-order-detail-general.component';

describe('IstaOrderDetailGeneralComponent', () => {
  let component: IstaOrderDetailGeneralComponent;
  let fixture: ComponentFixture<IstaOrderDetailGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstaOrderDetailGeneralComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IstaOrderDetailGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
