import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() openFixedMenu = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  openMenu(): void {
    this.openFixedMenu.emit(true);
  }
}
