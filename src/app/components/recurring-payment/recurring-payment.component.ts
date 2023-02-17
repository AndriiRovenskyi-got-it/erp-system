import { Component, OnInit } from '@angular/core';
import { BaseTable } from 'src/app/shared/classes/base-table';
import { CollapseTableTab } from 'src/app/shared/constants/animations';
import { Item } from '../../shared/components/items-list/items-list.component';

@Component({
  selector: 'app-recurring-payment',
  templateUrl: './recurring-payment.component.html',
  styleUrls: ['./recurring-payment.component.scss'],
  animations: [CollapseTableTab],
})
export class RecurringPaymentComponent extends BaseTable implements OnInit {
  public title = 'Recurring Payment';
  public reccuringPayments: Array<Item> = [
    { title: 'Amount Past Due', cost: 461 },
    { title: 'Amount Due', cost: 461 },
    { title: 'Current Balance', cost: 461 },
  ];

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
