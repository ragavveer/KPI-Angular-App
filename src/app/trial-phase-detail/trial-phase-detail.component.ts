import { TrialPhaseDetails } from './../trial-phase-details';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trial-phase-detail',
  templateUrl: './trial-phase-detail.component.html',
  styleUrls: ['./trial-phase-detail.component.scss']
})
export class TrialPhaseDetailComponent implements OnInit {
  @Input() detail: TrialPhaseDetails;
  constructor() {}

  ngOnInit() {}
}
