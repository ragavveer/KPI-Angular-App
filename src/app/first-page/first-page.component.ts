import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Observable } from 'rxjs';
import { TrialPhaseSummary } from '../trial-phase-summary';
import { TrialPhaseDetailGraph } from '../trial-phase-detail-graph';

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  summary$: Observable<Array<TrialPhaseSummary>>;
  graph$: Observable<Array<TrialPhaseDetailGraph>>;

  constructor(private mainService: MainService) {
    this.summary$ = this.mainService.getOtherSummary();
    this.graph$ = this.mainService.getTrialPhaseSummaryGraph();
  }

  ngOnInit() {}
}
