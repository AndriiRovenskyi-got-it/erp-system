import {animate, AnimationTriggerMetadata, AUTO_STYLE, state, style, transition, trigger} from "@angular/animations";

export const HideAnimation: AnimationTriggerMetadata =
  trigger('hide', [
    state('false', style({width: AUTO_STYLE, visibility: AUTO_STYLE})),
    state('true', style({width: '0', visibility: 'hidden'})),
    transition('false => true', animate('300ms ease-in')),
    transition('true => false', animate('300ms ease-out'))
  ])
