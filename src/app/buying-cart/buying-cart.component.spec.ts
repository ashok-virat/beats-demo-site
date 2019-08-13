import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingCartComponent } from './buying-cart.component';

describe('BuyingCartComponent', () => {
  let component: BuyingCartComponent;
  let fixture: ComponentFixture<BuyingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
