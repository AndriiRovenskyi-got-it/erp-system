import { Component, OnInit } from '@angular/core';
import { Item } from '../../shared/components/items-list/items-list.component';

@Component({
  selector: 'app-recurring-payment',
  templateUrl: './recurring-payment.component.html',
  styleUrls: ['./recurring-payment.component.scss'],
})
export class RecurringPaymentComponent implements OnInit {
  public title = 'Recurring Payment';
  public reccuringPayments: Array<Item> = [
    { title: 'Amount Past Due', cost: 461 },
    { title: 'Amount Due', cost: 461 },
    { title: 'Current Balance', cost: 461 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
