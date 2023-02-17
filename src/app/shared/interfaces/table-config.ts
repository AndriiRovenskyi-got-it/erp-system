export interface ITableConfig<T> {
  dataSource: T[];
  columns: IColumn<T>[];
  styleClasses?: string;
  hasMoreButton?: boolean;
}

export interface IColumn<T> {
  columnDef: string;
  header: string;
  cell: (element: T) => string | number;
  styleClasses?: string;
  isLinked?: boolean;
}
