import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertableheaderComponent } from './usertableheader.component';

describe('UsertableheaderComponent', () => {
  let component: UsertableheaderComponent;
  let fixture: ComponentFixture<UsertableheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertableheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertableheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
