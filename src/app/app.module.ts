import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatSelectModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { SideContentComponent } from './side-content/side-content.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LatestInsightComponent } from './latest-insight/latest-insight.component';
import { InsightComponent } from './insight/insight.component';
import { TotalNmeComponent } from './total-nme/total-nme.component';
import { PhaseTrialComponent } from './phase-trial/phase-trial.component';
import { PhaseComponent } from './phase/phase.component';
import { TrialPhaseSummaryComponent } from './trial-phase-summary/trial-phase-summary.component';
import { TrialPhaseDetailComponent } from './trial-phase-detail/trial-phase-detail.component';
import { TrialPhaseDetailCardComponent } from './trial-phase-detail-card/trial-phase-detail-card.component';
import { TrialPhaseListComponent } from './trial-phase-list/trial-phase-list.component';
import { PatentsComponent } from './patents/patents.component';
import { PublicationsComponent } from './publications/publications.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { TrialPhaseDetailGraphComponent } from './trial-phase-detail-graph/trial-phase-detail-graph.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    SideContentComponent,
    AppBarComponent,
    MainContentComponent,
    LatestInsightComponent,
    InsightComponent,
    TotalNmeComponent,
    PhaseTrialComponent,
    PhaseComponent,
    TrialPhaseSummaryComponent,
    TrialPhaseDetailComponent,
    TrialPhaseDetailCardComponent,
    TrialPhaseListComponent,
    PatentsComponent,
    PublicationsComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    BarChartComponent,
    LineChartComponent,
    TrialPhaseDetailGraphComponent,
    FourthPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
