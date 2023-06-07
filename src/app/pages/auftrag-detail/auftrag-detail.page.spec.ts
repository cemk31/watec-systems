import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuftragDetailPage } from './auftrag-detail.page';

describe('AuftragDetailPage', () => {
  let component: AuftragDetailPage;
  let fixture: ComponentFixture<AuftragDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuftragDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuftragDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
