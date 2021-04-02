import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassExerciseComponent } from './ng-class-exercise.component';

describe('NgClassExerciseComponent', () => {
  let component: NgClassExerciseComponent;
  let fixture: ComponentFixture<NgClassExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
