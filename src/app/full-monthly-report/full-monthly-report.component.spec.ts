import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMonthlyReportComponent } from './full-monthly-report.component';

describe('FullMonthlyReportComponent', () => {
  let component: FullMonthlyReportComponent;
  let fixture: ComponentFixture<FullMonthlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullMonthlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
