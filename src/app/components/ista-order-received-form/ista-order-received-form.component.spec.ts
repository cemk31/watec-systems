import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IstaOrderReceivedFormComponent } from './ista-order-received-form.component';

describe('IstaOrderReceivedFormComponent', () => {
  let component: IstaOrderReceivedFormComponent;
  let fixture: ComponentFixture<IstaOrderReceivedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstaOrderReceivedFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IstaOrderReceivedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
