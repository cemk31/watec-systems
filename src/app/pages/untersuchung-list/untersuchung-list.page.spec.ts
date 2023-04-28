import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UntersuchungListPage } from './untersuchung-list.page';

describe('UntersuchungListPage', () => {
  let component: UntersuchungListPage;
  let fixture: ComponentFixture<UntersuchungListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntersuchungListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UntersuchungListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
