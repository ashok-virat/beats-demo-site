import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErphoneComponent } from './erphone.component';

describe('ErphoneComponent', () => {
  let component: ErphoneComponent;
  let fixture: ComponentFixture<ErphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
