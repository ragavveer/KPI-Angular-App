import { Component, OnInit } from '@angular/core';
import { Insight } from '../insight';
import { Observable } from 'rxjs';
import { MainService } from '../services/main.service';

@Component({
  selector: 'latest-insight',
  templateUrl: './latest-insight.component.html',
  styleUrls: ['./latest-insight.component.scss']
})
export class LatestInsightComponent implements OnInit {
  insights$: Observable<Array<Insight>>;
  constructor(private mainService: MainService) {
    this.insights$ = this.mainService.getInsects();
  }

  ngOnInit() {}
}
