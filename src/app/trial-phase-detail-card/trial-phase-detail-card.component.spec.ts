import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialPhaseDetailCardComponent } from './trial-phase-detail-card.component';

describe('TrialPhaseDetailCardComponent', () => {
  let component: TrialPhaseDetailCardComponent;
  let fixture: ComponentFixture<TrialPhaseDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialPhaseDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialPhaseDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
