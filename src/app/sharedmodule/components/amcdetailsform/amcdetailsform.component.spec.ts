import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcdetailsformComponent } from './amcdetailsform.component';

describe('AmcdetailsformComponent', () => {
  let component: AmcdetailsformComponent;
  let fixture: ComponentFixture<AmcdetailsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmcdetailsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
