import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  myChart = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const data = [12, 19, 10, 12, 19, 9, 14];
    this.myChart = new Chart(
      (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d'),
      {
        type: 'bar',
        data: {
          labels: [...Array(28).fill('')],
          datasets: [
            {
              label: '# of Votes',
              data: [...data, ...data, ...data, ...data],
              backgroundColor: [
                ...Array(14).fill('#52A1FE'),
                ...Array(14).fill('#C4C4C4')
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  display: false
                },
                gridLines: {
                  drawBorder: false,
                  display: false
                }
              }
            ],
            xAxes: [
              {
                barThickness: 3,
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
    this.cd.detectChanges();
  }
}
