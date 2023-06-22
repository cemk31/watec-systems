import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IstaOrderListPage } from './ista-order-list.page';

describe('IstaOrderListPage', () => {
  let component: IstaOrderListPage;
  let fixture: ComponentFixture<IstaOrderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstaOrderListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IstaOrderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
