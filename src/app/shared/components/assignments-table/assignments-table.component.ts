import { Component, Input, OnInit } from '@angular/core';

export interface Assignment {
  name: string;
  date: string;
}

export interface Column {
  columnDef: string;
  header: string;
  cell: (element: any) => string | number;
}

@Component({
  selector: 'app-assignments-table',
  templateUrl: './assignments-table.component.html',
  styleUrls: ['./assignments-table.component.scss'],
})
export class AssignmentsTableComponent implements OnInit {
  @Input() dataSource: Array<Assignment>;
  @Input() columns: Array<Column>;
  @Input() assignmentDue: boolean;
  public displayedColumns;

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((c) => c.columnDef);
  }
}
