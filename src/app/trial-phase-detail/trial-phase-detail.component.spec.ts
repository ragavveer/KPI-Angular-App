import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialPhaseDetailComponent } from './trial-phase-detail.component';

describe('PhaseTrialDetailComponent', () => {
  let component: TrialPhaseDetailComponent;
  let fixture: ComponentFixture<TrialPhaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrialPhaseDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialPhaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
