import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectMembersComponent } from './connect-members.component';

describe('ConnectMembersComponent', () => {
  let component: ConnectMembersComponent;
  let fixture: ComponentFixture<ConnectMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
