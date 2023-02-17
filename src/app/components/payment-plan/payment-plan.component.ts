import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseTable } from 'src/app/shared/classes/base-table';
import { CollapseTableTab } from 'src/app/shared/constants/animations';
import { ITableConfig } from 'src/app/shared/interfaces/table-config';

interface PaymentPlan {
  inst: number;
  dueDate: string;
  semester: string;
  amountDue: number;
  amountPaid: number;
  datePaid: string;
  balance: number;
}

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [CollapseTableTab],
})
export class PaymentPlanComponent  extends BaseTable implements OnInit {
  public title = 'Payment Plan';
  config: ITableConfig<PaymentPlan> = {
    columns: [
      {
        columnDef: 'inst',
        header: 'Inst №',
        cell: (element: PaymentPlan) => `${element.inst}`,
      },
      {
        columnDef: 'dueDate',
        header: 'Due date',
        cell: (element: PaymentPlan) => `${element.dueDate}`,
      },
      {
        columnDef: 'semester',
        header: 'Semester',
        cell: (element: PaymentPlan) => `${element.semester}`,
      },
      {
        columnDef: 'amountDue',
        header: 'Amount Due',
        cell: (element: PaymentPlan) => element.amountDue,
      },
      {
        columnDef: 'amountPaid',
        header: 'Amount Paid',
        cell: (element: PaymentPlan) => element.amountPaid,
      },
      {
        columnDef: 'datePaid',
        header: 'Date Paid',
        cell: (element: PaymentPlan) => `${element.datePaid}`,
      },
      {
        columnDef: 'balance',
        header: 'Balance',
        cell: (element: PaymentPlan) => element.balance,
      },
    ],
     dataSource: [
      {
        inst: 1,
        dueDate: '1/1/2019',
        semester: '',
        amountDue: 215,
        amountPaid: 215,
        datePaid: '9/2/2022',
        balance: 0,
      },
      {
        inst: 2,
        dueDate: '1/2/2019',
        semester: 'Spring 2016',
        amountDue: 315,
        amountPaid: 215,
        datePaid: '9/2/2022',
        balance: 100,
      },
      {
        inst: 1,
        dueDate: '1/3/2019',
        semester: 'Winter 2016',
        amountDue: 415,
        amountPaid: 215,
        datePaid: '9/2/2022',
        balance: 200,
      },
      {
        inst: 1,
        dueDate: '1/4/2019',
        semester: '',
        amountDue: 515,
        amountPaid: 215,
        datePaid: '9/2/2022',
        balance: 300,
      },
    ],
    styleClasses: 'table-simple'
  }
  public footerData = [
    { totalName: 'Inst №', totalValue: 'Total' },
    { totalName: 'Amount Due', totalValue: 100 },
    { totalName: 'Amount Paid', totalValue: 200 },
    { totalName: 'Balance', totalValue: 300 },
  ];
  constructor() {
    super();
  }

  ngOnInit(): void {}

  isNumber(val): boolean {
    return typeof val === 'number';
  }
}
