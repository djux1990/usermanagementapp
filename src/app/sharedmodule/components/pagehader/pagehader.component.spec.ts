import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagehaderComponent } from './pagehader.component';

describe('PagehaderComponent', () => {
  let component: PagehaderComponent;
  let fixture: ComponentFixture<PagehaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagehaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagehaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
