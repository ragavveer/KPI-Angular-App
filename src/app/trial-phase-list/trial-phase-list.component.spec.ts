import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialPhaseListComponent } from './trial-phase-list.component';

describe('TrialPhaseListComponent', () => {
  let component: TrialPhaseListComponent;
  let fixture: ComponentFixture<TrialPhaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialPhaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialPhaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
