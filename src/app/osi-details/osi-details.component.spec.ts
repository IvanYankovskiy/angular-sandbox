import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiDetailsComponent } from './osi-details.component';

describe('OsiDetailsComponent', () => {
  let component: OsiDetailsComponent;
  let fixture: ComponentFixture<OsiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
