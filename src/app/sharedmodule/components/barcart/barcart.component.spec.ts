import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcartComponent } from './barcart.component';

describe('BarcartComponent', () => {
  let component: BarcartComponent;
  let fixture: ComponentFixture<BarcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
