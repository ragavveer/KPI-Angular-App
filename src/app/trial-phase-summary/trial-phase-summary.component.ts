import { TrialPhaseSummary } from './../trial-phase-summary';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trial-phase-summary',
  templateUrl: './trial-phase-summary.component.html',
  styleUrls: ['./trial-phase-summary.component.scss']
})
export class TrialPhaseSummaryComponent implements OnInit {
  @Input() summary: TrialPhaseSummary;

  constructor() {}

  ngOnInit() {}
}
