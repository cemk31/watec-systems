import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateClosedContractPartnerTWAComponent } from './create-closed-contract-partner-twa.component';

describe('CreateClosedContractPartnerTWAComponent', () => {
  let component: CreateClosedContractPartnerTWAComponent;
  let fixture: ComponentFixture<CreateClosedContractPartnerTWAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClosedContractPartnerTWAComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateClosedContractPartnerTWAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
