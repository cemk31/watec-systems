import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IstaOrderDetailTwaComponent } from './ista-order-detail-twa.component';

describe('IstaOrderDetailTwaComponent', () => {
  let component: IstaOrderDetailTwaComponent;
  let fixture: ComponentFixture<IstaOrderDetailTwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstaOrderDetailTwaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IstaOrderDetailTwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
