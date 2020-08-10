import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAddInvestmentDialogComponent } from './confirm-add-investment-dialog.component';

describe('ConfirmAddInvestmentDialogComponent', () => {
  let component: ConfirmAddInvestmentDialogComponent;
  let fixture: ComponentFixture<ConfirmAddInvestmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAddInvestmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAddInvestmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
