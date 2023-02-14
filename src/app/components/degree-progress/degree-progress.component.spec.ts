import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeProgressComponent } from './degree-progress.component';

describe('DegreeProgressComponent', () => {
  let component: DegreeProgressComponent;
  let fixture: ComponentFixture<DegreeProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
