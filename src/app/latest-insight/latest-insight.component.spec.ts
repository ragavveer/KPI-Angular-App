import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestInsightComponent } from './latest-insight.component';

describe('LatestInsightComponent', () => {
  let component: LatestInsightComponent;
  let fixture: ComponentFixture<LatestInsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestInsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
