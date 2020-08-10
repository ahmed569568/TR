import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAddMemberDialogComponent } from './confirm-add-member-dialog.component';

describe('ConfirmAddMemberDialogComponent', () => {
  let component: ConfirmAddMemberDialogComponent;
  let fixture: ComponentFixture<ConfirmAddMemberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAddMemberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAddMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
