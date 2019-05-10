import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialPhaseDetailGraphComponent } from './trial-phase-detail-graph.component';

describe('TrialPhaseDetailGraphComponent', () => {
  let component: TrialPhaseDetailGraphComponent;
  let fixture: ComponentFixture<TrialPhaseDetailGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialPhaseDetailGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialPhaseDetailGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
