import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDeptComponent } from './pay-dept.component';

describe('PayDeptComponent', () => {
  let component: PayDeptComponent;
  let fixture: ComponentFixture<PayDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
