import {Component, OnInit} from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'app-ng-class-exercise',
  templateUrl: './ng-class-exercise.component.html',
  styleUrls: ['./ng-class-exercise.component.css']
})
export class NgClassExerciseComponent implements OnInit {
  passengers: Person [] = [
    {
      fullName: 'John Smith',
      dateOfBirth: new Date(1985, 1, 16),
      gender: 'male',
      checkedIn: true,
    },
    {
      fullName: 'Jade Armstrong',
      dateOfBirth: new Date(1990, 7, 3),
      gender: 'male',
      checkedIn: false,
    },
    {
      fullName: 'Joe Russell',
      dateOfBirth: new Date(1955, 1, 28),
      gender: 'male',
      checkedIn: true,
    },
    {
      fullName: 'Judy Hudson',
      dateOfBirth: new Date(1960, 1, 1),
      gender: 'female',
      checkedIn: true,
    },
    {
      fullName: 'James Long',
      dateOfBirth: new Date(1988, 9, 16),
      gender: 'male',
      checkedIn: false,
    }
  ];
  noPassengers = 'No passengers yet';
  colorEvenInEl = '#efefef';
  colorOddInEl = 'white';
  checkedIn = ':white_check_mark:';
  notCheckedIn = ':x:';

  constructor() {
  }


  isCheckedIn(index: number): string {
    if (this.passengers[index].checkedIn) {
      return this.checkedIn;
    }
    return this.notCheckedIn;

  }


  ngOnInit(): void {
  }

}
