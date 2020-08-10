import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchUrgentDeptComponent } from './watch-urgent-dept.component';

describe('WatchUrgentDeptComponent', () => {
  let component: WatchUrgentDeptComponent;
  let fixture: ComponentFixture<WatchUrgentDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchUrgentDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchUrgentDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
