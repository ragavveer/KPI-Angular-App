import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { MainService } from '../services/main.service';

import { TrialPhaseDetails } from './../trial-phase-details';
import { TrialPhaseSummary } from './../trial-phase-summary';

@Component({
  selector: 'phase-trial',
  templateUrl: './phase-trial.component.html',
  styleUrls: ['./phase-trial.component.scss']
})
export class PhaseTrialComponent implements OnInit {
  summary: TrialPhaseSummary;
  details$: Observable<Array<TrialPhaseDetails>>;

  constructor(private mainService: MainService) {
    this.details$ = this.mainService.getTrialPhaseDetails();
    this.mainService
      .getTrialPhaseSummary()
      .subscribe(result => (this.summary = result));
  }

  ngOnInit() {}
}
