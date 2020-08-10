import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeptComponent } from './main-dept.component';

describe('MainDeptComponent', () => {
  let component: MainDeptComponent;
  let fixture: ComponentFixture<MainDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
