import { MainService } from './../services/main.service';
import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { Chart } from 'chart.js';
import { LineChart } from '../line-chart';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnChanges {
  @ViewChild('canvas') canvas: ElementRef;
  myChart = [];
  @Input() chartData: LineChart;

  constructor(
    private mainService: MainService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.chartData.currentValue) {
      this.drawLineChart();
    }
  }

  drawLineChart() {
    this.myChart = new Chart(
      (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d'),
      {
        type: 'line',
        data: {
          labels: [...Array(23).fill('')],
          datasets: [
            {
              label: '# of Votes',
              data: [...this.chartData.data],
              fill: false,
              borderColor: this.chartData.color,
              backgroundColor: this.chartData.color
            }
          ]
        },
        options: {
          elements: {
            point: {
              radius: 0
            }
          },
          legend: {
            display: false
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  display: false,
                  reverse: false
                },
                gridLines: {
                  drawBorder: false,
                  display: false
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  display: false
                }
              }
            ]
          }
        }
      }
    );
  }
}
