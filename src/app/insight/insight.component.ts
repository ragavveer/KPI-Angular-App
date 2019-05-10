import { Insight } from './../insight';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnInit {
  @Input() insight: Insight;

  constructor() {}

  ngOnInit() {}
}
