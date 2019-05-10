import { Component, OnInit, Input } from '@angular/core';
import { TrialPhaseCompleteDetail } from '../trial-phase-complete-detail';

@Component({
  selector: 'trial-phase-detail-card',
  templateUrl: './trial-phase-detail-card.component.html',
  styleUrls: ['./trial-phase-detail-card.component.scss']
})
export class TrialPhaseDetailCardComponent implements OnInit {
  @Input() trialPhase: TrialPhaseCompleteDetail;

  constructor() {}

  ngOnInit() {}
}
