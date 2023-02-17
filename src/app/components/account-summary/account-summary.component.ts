import { Component, OnInit } from '@angular/core';
import { BaseTable } from 'src/app/shared/classes/base-table';
import { CollapseTableTab } from 'src/app/shared/constants/animations';

interface SummaryItem {
  period: string;
  details: Array<SummaryDetail>;
}

interface SummaryDetail {
  title: string;
  cost: number;
}

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
  animations: [CollapseTableTab],
})
export class AccountSummaryComponent extends BaseTable implements OnInit {
  public title = 'Account Symmary';
  public totalCosts: Array<number> = [];
  public totalCost = 0;
  public totalSpendings = 0;
  public summaryItems: Array<SummaryItem> = [
    {
      period: 'Spring 2016',
      details: [
        {
          title: 'Total Tuition',
          cost: 125800,
        },
        {
          title: 'Total Fees & Charges',
          cost: 50,
        },
      ],
    },
    {
      period: 'Fall 2019',
      details: [
        {
          title: 'Total Tuition',
          cost: 8110,
        },
        {
          title: 'Total Fees & Charges',
          cost: 70,
        },
      ],
    },
    {
      period: 'Summer 2020',
      details: [
        {
          title: 'Total Tuition',
          cost: 2000,
        },
        {
          title: 'Total Fees & Charges',
          cost: 0,
        },
      ],
    },
  ];

  public spendings: Array<SummaryDetail> = [
    {
      title: 'Paid (Out of Packet)',
      cost: 43747.5,
    },
    {
      title: 'Financial Aid Disbursed',
      cost: 0,
    },
  ];

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.totalSpendings = this.getSummaryItemCost(this.spendings);
    for (let item of this.summaryItems) {
      this.totalCosts.push(this.getSummaryItemCost(item.details));
    }
    this.totalCost = this.getTotalCost();
  }

  getSummaryItemCost(items) {
    return items
      .map((item) => item.cost)
      .reduce((acc, value) => acc + value, 0);
  }

  getTotalCost() {
    return this.totalCosts.reduce((sum, a) => sum + a, 0);
  }
}
