import { Component, OnInit } from '@angular/core';
import { BaseTable } from 'src/app/shared/classes/base-table';
import { CollapseTableTab } from 'src/app/shared/constants/animations';
import { IAssessment } from 'src/app/shared/interfaces/assessment';
import { ITableConfig } from 'src/app/shared/interfaces/table-config';

@Component({
  selector: 'app-assignments-due',
  templateUrl: './assignments-due.component.html',
  styleUrls: ['./assignments-due.component.scss'],
  animations: [CollapseTableTab]
})
export class AssignmentsDueComponent extends BaseTable implements OnInit {
  public title = 'Assignments Due';
  config: ITableConfig<IAssessment> = {
    dataSource: [
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
    ],
  
    columns: [
      {
        columnDef: 'name',
        header: 'Assignment',
        isLinked: true,
        cell: (element: IAssessment) => `${element.name}`,
      },
      {
        columnDef: 'date',
        header: 'Due',
        cell: (element: IAssessment) => `${element.date}`,
      },
    ],
    hasMoreButton: true
  }
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
