import { Component, Input, OnInit } from '@angular/core';
import { Statistic } from '../statistics.component';

@Component({
  selector: 'app-statistic-item',
  templateUrl: './statistic-item.component.html',
  styleUrls: ['./statistic-item.component.scss'],
})
export class StatisticItemComponent implements OnInit {
  @Input() statistic: Statistic | undefined;

  constructor() {}

  ngOnInit(): void {}
}
