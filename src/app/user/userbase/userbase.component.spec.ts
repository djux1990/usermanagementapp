import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbaseComponent } from './userbase.component';

describe('UserbaseComponent', () => {
  let component: UserbaseComponent;
  let fixture: ComponentFixture<UserbaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserbaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
