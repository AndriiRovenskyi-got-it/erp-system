import { Component } from '@angular/core';
import { state, style, trigger } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fixedMenu', [
      state('false', style({position: 'relative' })),
      state('true', style({position: 'fixed', top: '0', height: '100vh', width: 'max-content', display: 'block'}))
    ]),
  ]
})
export class AppComponent {
  isFixedMenu?: boolean;
  title = 'erp-system';

  onChangeFixedMenuState(isOpen: boolean): void {
    this.isFixedMenu = isOpen;
  }
}
