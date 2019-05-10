import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseTrialComponent } from './phase-trial.component';

describe('PhaseTrialComponent', () => {
  let component: PhaseTrialComponent;
  let fixture: ComponentFixture<PhaseTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
