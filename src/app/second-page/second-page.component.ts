import { Component, OnInit } from '@angular/core';

import { MainService } from '../services/main.service';
import { TrialPhaseDetailGraph } from '../trial-phase-detail-graph';

import { Observable } from 'rxjs';

@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  graph$: Observable<Array<TrialPhaseDetailGraph>>;
  constructor(private mainService: MainService) {
    this.graph$ = this.mainService.getTrialPhaseSummaryGraph();
  }

  ngOnInit() {}
}
