import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss'],
})
export class TableHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() isTabCollapse: boolean;

  @Output() changeTabDisplay = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  onChangeTabDisplay(): void {
    this.changeTabDisplay.emit(!this.isTabCollapse);
  }
}
