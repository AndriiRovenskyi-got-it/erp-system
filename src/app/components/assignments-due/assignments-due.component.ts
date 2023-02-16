import { Component, OnInit } from '@angular/core';
import { CollapseTableTab } from 'src/app/shared/constants/animations';
import {
  Assignment,
  Column,
} from '../../shared/components/assignments-table/assignments-table.component';

@Component({
  selector: 'app-assignments-due',
  templateUrl: './assignments-due.component.html',
  styleUrls: ['./assignments-due.component.scss'],
  animations: [CollapseTableTab]
})
export class AssignmentsDueComponent implements OnInit {
  public title = 'Assignments Due';
  public isTabCollapse = false;

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

  onChangeTabCollapse(value: boolean): void {
    this.isTabCollapse = value;
  }
}
