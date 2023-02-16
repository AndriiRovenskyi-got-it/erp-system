import { animate, AUTO_STYLE, state, style, transition, trigger } from "@angular/animations";

export const CollapseTableTab = trigger('collapseTableTab', [
  state(
    'false',
    style({
      display: AUTO_STYLE,
      height: AUTO_STYLE,
      visibility: AUTO_STYLE,
    })
  ),
  state('true', style({ display: 'none', height: '0', visibility: 'hidden' })),
  transition('false => true', animate('100ms ease-in')),
  transition('true => false', animate('0ms')),
]);
