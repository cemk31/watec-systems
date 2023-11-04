import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IstaCustomerContactComponent } from './ista-customer-contact.component';

describe('IstaCustomerContactComponent', () => {
  let component: IstaCustomerContactComponent;
  let fixture: ComponentFixture<IstaCustomerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstaCustomerContactComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IstaCustomerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
