import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsboardComponent } from './tripsboard.component';

describe('TripsboardComponent', () => {
  let component: TripsboardComponent;
  let fixture: ComponentFixture<TripsboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
