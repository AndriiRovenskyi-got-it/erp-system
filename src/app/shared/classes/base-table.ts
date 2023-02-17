export class BaseTable {
  isTabCollapse: boolean = false;
  isTabHide: boolean = false;
  constructor() {}

  onChangeTabCollapse(value: boolean): void {
    this.isTabCollapse = value;
  }

  onCloseTap(value: boolean): void {
    this.isTabHide = value;
  }
}
