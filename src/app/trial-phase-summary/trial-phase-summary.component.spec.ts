import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialPhaseSummaryComponent } from './trial-phase-summary.component';

describe('PhaseTrialSummaryComponent', () => {
  let component: TrialPhaseSummaryComponent;
  let fixture: ComponentFixture<TrialPhaseSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrialPhaseSummaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialPhaseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
