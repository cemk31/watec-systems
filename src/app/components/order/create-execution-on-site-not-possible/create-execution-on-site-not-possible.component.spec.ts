import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateExecutionOnSiteNotPossibleComponent } from './create-execution-on-site-not-possible.component';

describe('CreateExecutionOnSiteNotPossibleComponent', () => {
  let component: CreateExecutionOnSiteNotPossibleComponent;
  let fixture: ComponentFixture<CreateExecutionOnSiteNotPossibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExecutionOnSiteNotPossibleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateExecutionOnSiteNotPossibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
