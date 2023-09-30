import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IstaOrderTablePage } from './ista-order-table.page';

describe('IstaOrderTablePage', () => {
  let component: IstaOrderTablePage;
  let fixture: ComponentFixture<IstaOrderTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstaOrderTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IstaOrderTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
