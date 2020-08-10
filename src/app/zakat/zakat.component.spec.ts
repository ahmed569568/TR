import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakatComponent } from './zakat.component';

describe('ZakatComponent', () => {
  let component: ZakatComponent;
  let fixture: ComponentFixture<ZakatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
