import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalityReportComponent } from './penality-report.component';

describe('PenalityReportComponent', () => {
  let component: PenalityReportComponent;
  let fixture: ComponentFixture<PenalityReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalityReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
