import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDeptMembersComponent } from './no-dept-members.component';

describe('NoDeptMembersComponent', () => {
  let component: NoDeptMembersComponent;
  let fixture: ComponentFixture<NoDeptMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoDeptMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDeptMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
