import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';
import { TrialPhaseCompleteDetail } from '../trial-phase-complete-detail';

import { Observable } from 'rxjs';

@Component({
  selector: 'trial-phase-list',
  templateUrl: './trial-phase-list.component.html',
  styleUrls: ['./trial-phase-list.component.scss']
})
export class TrialPhaseListComponent implements OnInit {
  trialPhase$: Observable<Array<TrialPhaseCompleteDetail>>;
  constructor(private mainService: MainService) {
    this.trialPhase$ = this.mainService.getTrialPhaseCompleteDetails();
  }

  ngOnInit() {}
}
