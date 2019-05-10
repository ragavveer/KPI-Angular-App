import { Publication } from './../publication';
import { Patent } from './../patent';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TrialPhaseDetails } from './../trial-phase-details';
import { TrialPhaseSummary } from './../trial-phase-summary';
import { Insight } from '../insight';
import { TrialPhaseCompleteDetail } from '../trial-phase-complete-detail';
import { LineChart } from '../line-chart';
import { TrialPhaseDetailGraph } from '../trial-phase-detail-graph';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) {}
  getInsects(): Observable<Array<Insight>> {
    return this.http.get<Array<Insight>>('http://localhost:3000/insights');
  }

  getTrialPhaseSummary(): Observable<TrialPhaseSummary> {
    return this.http.get<TrialPhaseSummary>(
      'http://localhost:3000/trialPhaseSummary'
    );
  }

  getTrialPhaseDetails(): Observable<Array<TrialPhaseDetails>> {
    return this.http.get<Array<TrialPhaseDetails>>(
      'http://localhost:3000/trialPhaseDetails'
    );
  }

  getTrialPhaseCompleteDetails(): Observable<Array<TrialPhaseCompleteDetail>> {
    return this.http.get<Array<TrialPhaseCompleteDetail>>(
      'http://localhost:3000/trialPhaseCompleteDetail'
    );
  }

  getPatents(): Observable<Array<Patent>> {
    return this.http.get<Array<Patent>>('http://localhost:3000/patents');
  }

  getPublications(): Observable<Publication> {
    return this.http.get<Publication>('http://localhost:3000/publications');
  }

  getOtherSummary(): Observable<Array<TrialPhaseSummary>> {
    return this.http.get<Array<TrialPhaseSummary>>(
      'http://localhost:3000/otherSummary'
    );
  }

  getLineChartData(): Observable<LineChart> {
    return this.http.get<LineChart>('http://localhost:3000/lineChart');
  }

  getLineChart2Data(): Observable<LineChart> {
    return this.http.get<LineChart>('http://localhost:3000/lineChart2');
  }

  getTrialPhaseSummaryGraph(): Observable<Array<TrialPhaseDetailGraph>> {
    return this.http.get<Array<TrialPhaseDetailGraph>>(
      'http://localhost:3000/trialPhaseDetailGraph'
    );
  }
}
