import { Component, OnInit } from '@angular/core';
import {
  Assignment,
  Column,
} from '../../shared/components/assignments-table/assignments-table.component';

@Component({
  selector: 'app-assignments-due',
  templateUrl: './assignments-due.component.html',
  styleUrls: ['./assignments-due.component.scss'],
})
export class AssignmentsDueComponent implements OnInit {
  public title = 'Assignments Due';

  public dataSource: Array<Assignment> = [
    {
      name: 'Reading Assignment on Polynomials',
      date: 'Jan 30, 2011 11:55 PM',
    },
    {
      name: 'Reading Assignment on Polynomials',
      date: 'Jan 30, 2011 11:55 PM',
    },
    {
      name: 'Reading Assignment on Polynomials',
      date: 'Jan 30, 2011 11:55 PM',
    },
    {
      name: 'Reading Assignment on Polynomials',
      date: 'Jan 30, 2011 11:55 PM',
    },
  ];

  columns: Array<Column> = [
    {
      columnDef: 'name',
      header: 'Assignment',
      cell: (element: Assignment) => `${element.name}`,
    },
    {
      columnDef: 'date',
      header: 'Due',
      cell: (element: Assignment) => `${element.date}`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
