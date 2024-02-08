import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateExecutionOnSiteDoneComponent } from './create-execution-on-site-done.component';

describe('CreateExecutionOnSiteDoneComponent', () => {
  let component: CreateExecutionOnSiteDoneComponent;
  let fixture: ComponentFixture<CreateExecutionOnSiteDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExecutionOnSiteDoneComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateExecutionOnSiteDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
