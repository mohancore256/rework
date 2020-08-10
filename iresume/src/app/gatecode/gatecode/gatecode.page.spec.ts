import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GatecodePage } from './gatecode.page';

describe('GatecodePage', () => {
  let component: GatecodePage;
  let fixture: ComponentFixture<GatecodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatecodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GatecodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
