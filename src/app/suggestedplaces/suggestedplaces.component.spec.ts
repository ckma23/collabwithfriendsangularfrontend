import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedplacesComponent } from './suggestedplaces.component';

describe('SuggestedplacesComponent', () => {
  let component: SuggestedplacesComponent;
  let fixture: ComponentFixture<SuggestedplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
