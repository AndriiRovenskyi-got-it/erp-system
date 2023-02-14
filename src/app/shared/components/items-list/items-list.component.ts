import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

export interface Item {
  title: string;
  cost: number
}

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsListComponent implements OnInit {
  @Input() items: Array<Item>;

  constructor() { }

  ngOnInit(): void {
  }

}
