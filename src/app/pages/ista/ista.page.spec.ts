import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IstaPage } from './ista.page';
describe('IstaPage', () => {
  let component: IstaPage;
  let fixture: ComponentFixture<IstaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();



    fixture = TestBed.createComponent(IstaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
