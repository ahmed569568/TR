import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchNormalDeptComponent } from './watch-normal-dept.component';

describe('WatchNormalDeptComponent', () => {
  let component: WatchNormalDeptComponent;
  let fixture: ComponentFixture<WatchNormalDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchNormalDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchNormalDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
