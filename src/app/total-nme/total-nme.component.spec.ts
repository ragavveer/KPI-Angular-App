import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalNmeComponent } from './total-nme.component';

describe('TotalNmeComponent', () => {
  let component: TotalNmeComponent;
  let fixture: ComponentFixture<TotalNmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalNmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalNmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
