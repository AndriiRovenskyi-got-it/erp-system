import { Component, OnInit } from '@angular/core';
import { CollapseTableTab } from 'src/app/shared/constants/animations';
import {
  Assignment,
  Column,
} from '../../shared/components/assignments-table/assignments-table.component';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss'],
  animations: [CollapseTableTab]
})
export class AssessmentsComponent implements OnInit {
  public title = 'Assessments';
  public isTabCollapse = false;
  public dataSource: Array<Assignment> = [
    {
      name: 'Module 1 Final Exam',
      date: 'Dec 01, 2022 12:00 AM',
    },
    {
      name: 'Module 1 Final Exam',
      date: 'Dec 01, 2022 12:00 AM',
    },
    {
      name: 'Module 1 Final Exam',
      date: 'Dec 01, 2022 12:00 AM',
    },
    {
      name: 'Module 1 Final Exam',
      date: 'Dec 01, 2022 12:00 AM',
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
