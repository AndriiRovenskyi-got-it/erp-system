import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Column } from '../../shared/components/assignments-table/assignments-table.component';

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
})
export class PaymentPlanComponent implements OnInit {
  public title = 'Payment Plan';
  public columns: Array<Column> = [
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
  ];
  public dataSource: Array<PaymentPlan> = [
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
  ];
  public footerData = [
    { totalName: 'Inst №', totalValue: 'Total' },
    { totalName: 'Amount Due', totalValue: 100 },
    { totalName: 'Amount Paid', totalValue: 200 },
    { totalName: 'Balance', totalValue: 300 },
  ];
  displayedColumns = this.columns.map((c) => c.columnDef);

  constructor() {}

  ngOnInit(): void {}

  isNumber(val) {
    return typeof val === 'number';
  }
}
