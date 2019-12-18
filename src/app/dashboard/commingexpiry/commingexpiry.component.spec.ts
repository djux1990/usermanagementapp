import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommingexpiryComponent } from './commingexpiry.component';

describe('CommingexpiryComponent', () => {
  let component: CommingexpiryComponent;
  let fixture: ComponentFixture<CommingexpiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommingexpiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommingexpiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
