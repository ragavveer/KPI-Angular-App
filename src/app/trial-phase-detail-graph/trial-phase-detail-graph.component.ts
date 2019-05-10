import { TrialPhaseDetailGraph } from './../trial-phase-detail-graph';
import { LineChart } from './../line-chart';
import { MainService } from './../services/main.service';
import { Component, OnInit, Input } from '@angular/core';

import { forkJoin } from 'rxjs';

@Component({
  selector: 'trial-phase-detail-graph',
  templateUrl: './trial-phase-detail-graph.component.html',
  styleUrls: ['./trial-phase-detail-graph.component.scss']
})
export class TrialPhaseDetailGraphComponent implements OnInit {
  @Input() graph: TrialPhaseDetailGraph;
  chartData: LineChart;
  chartData2: LineChart;

  constructor(private mainService: MainService) {
    const LineChart$ = this.mainService.getLineChartData();
    const LineChart2$ = this.mainService.getLineChart2Data();
    forkJoin([LineChart$, LineChart2$]).subscribe(result => {
      [this.chartData, this.chartData2] = result;
    });
  }

  ngOnInit() {}
}
