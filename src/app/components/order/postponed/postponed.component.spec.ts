import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostponedComponent } from './postponed.component';

describe('PostponedComponent', () => {
  let component: PostponedComponent;
  let fixture: ComponentFixture<PostponedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostponedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostponedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
