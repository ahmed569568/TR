import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialTransactionsSummaryComponent } from './financial-transactions-summary.component';

describe('FinancialTransactionsSummaryComponent', () => {
  let component: FinancialTransactionsSummaryComponent;
  let fixture: ComponentFixture<FinancialTransactionsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialTransactionsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialTransactionsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
