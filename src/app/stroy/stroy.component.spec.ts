import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StroyComponent } from './stroy.component';

describe('StroyComponent', () => {
  let component: StroyComponent;
  let fixture: ComponentFixture<StroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
