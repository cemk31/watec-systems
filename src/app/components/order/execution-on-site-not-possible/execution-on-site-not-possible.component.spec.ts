import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExecutionOnSiteNotPossibleComponent } from './execution-on-site-not-possible.component';

describe('ExecutionOnSiteNotPossibleComponent', () => {
  let component: ExecutionOnSiteNotPossibleComponent;
  let fixture: ComponentFixture<ExecutionOnSiteNotPossibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionOnSiteNotPossibleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExecutionOnSiteNotPossibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
