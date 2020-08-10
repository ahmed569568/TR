import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentIncomeComponent } from './investment-income.component';

describe('InvestmentIncomeComponent', () => {
  let component: InvestmentIncomeComponent;
  let fixture: ComponentFixture<InvestmentIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
