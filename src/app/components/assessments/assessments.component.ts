import { Component, OnInit } from '@angular/core';
import { BaseTable } from 'src/app/shared/classes/base-table';
import { CollapseTableTab } from 'src/app/shared/constants/animations';
import { IAssessment } from 'src/app/shared/interfaces/assessment';
import { ITableConfig } from 'src/app/shared/interfaces/table-config';

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss'],
  animations: [CollapseTableTab]
})
export class AssessmentsComponent extends BaseTable implements OnInit  {
  title = 'Assessments';

  config:ITableConfig<IAssessment> = {
    dataSource: [
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
    ],
    columns: [
      {
        columnDef: 'name',
        header: 'Assignment',
        styleClasses: 'text-green-600',
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

  ngOnInit(): void {
  }
}
