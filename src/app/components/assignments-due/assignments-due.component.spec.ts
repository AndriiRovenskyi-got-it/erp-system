import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsDueComponent } from './assignments-due.component';

describe('AssignmentsDueComponent', () => {
  let component: AssignmentsDueComponent;
  let fixture: ComponentFixture<AssignmentsDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentsDueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentsDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
