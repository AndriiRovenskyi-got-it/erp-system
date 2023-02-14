import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

export interface Statistic {
  name: string;
  count: number;
  countPercentage: number;
  countDescription: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  public statistics: Array<Statistic> = [
    {
      name: 'Times absent',
      count: 2,
      countPercentage: 98,
      countDescription: '98% active',
    },
    {
      name: 'Times tardy',
      count: 8,
      countPercentage: 69,
      countDescription: '69% active',
    },
    {
      name: 'Actual hours',
      count: 101,
      countPercentage: 80,
      countDescription: '80% done',
    },
    {
      name: 'Scheduled hours',
      count: 140,
      countPercentage: 0,
      countDescription: 'until the end of the course',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
