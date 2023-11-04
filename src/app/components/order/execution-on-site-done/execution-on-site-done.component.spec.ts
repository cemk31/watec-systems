import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExecutionOnSiteDoneComponent } from './execution-on-site-done.component';

describe('ExecutionOnSiteDoneComponent', () => {
  let component: ExecutionOnSiteDoneComponent;
  let fixture: ComponentFixture<ExecutionOnSiteDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionOnSiteDoneComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExecutionOnSiteDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
