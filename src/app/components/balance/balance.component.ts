import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  public balance = '$2,150.00';
  public paymentDate = '12/14/2022';

  constructor() {}

  ngOnInit(): void {}
}
