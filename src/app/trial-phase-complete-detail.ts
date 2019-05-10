import { Insight } from './insight';

export interface Details {
  title: string;
  result: string;
  description: string;
  growth: string;
}

export interface TrialPhaseCompleteDetail {
  title: string;
  description: string;
  details: Array<Details>;
  insights: Array<Insight>;
}
