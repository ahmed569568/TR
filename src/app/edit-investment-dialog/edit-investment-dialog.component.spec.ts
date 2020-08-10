import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvestmentDialogComponent } from './edit-investment-dialog.component';

describe('EditInvestmentDialogComponent', () => {
  let component: EditInvestmentDialogComponent;
  let fixture: ComponentFixture<EditInvestmentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInvestmentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInvestmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
