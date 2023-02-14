import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HideAnimation } from './constants/animations';

export interface MenuItem {
  path: string;
  name: string;
  active: boolean;
  submenu?: MenuItem[];
  iconPath?: string;
  mobileMode?: boolean;
  spaceBefore?: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ width: '280px' })),
      state('true', style({ width: '80px' })),
      transition('false => true', animate('300ms ease-in')),
      transition('true => false', animate('300ms ease-out')),
    ]),
    trigger('rotatedCollapsedIcon', [
      state('false', style({ transform: 'rotate(-180deg)' })),
      state('true', style({ transform: 'rotate(0deg)' })),
    ]),
    HideAnimation,
  ],
})
export class MenuComponent implements OnInit {
  menu: MenuItem[];
  collapsed: boolean;

  constructor() {
    this.menu = [
      {
        path: 'dashboard',
        name: 'Dashboard',
        active: true,
      },
      {
        path: 'classes',
        name: 'Classes',
        active: false,
      },
      {
        path: 'attendance',
        name: 'Attendance',
        active: false,
      },
      {
        path: 'reports',
        name: 'Reports',
        active: false,
        submenu: [],
      },
      {
        path: 'finance',
        name: 'Finance',
        active: false,
        submenu: [],
      },
      {
        path: 'shedules',
        name: 'Shedules',
        active: false,
        submenu: [],
      },
      {
        path: 'referance',
        name: 'Referance',
        active: false,
        submenu: [],
      },
      {
        path: 'tracking',
        name: 'Tracking',
        active: false,
      },
      {
        path: 'settings',
        name: 'Settings',
        active: false,
      },
      {
        path: 'message',
        name: 'Message',
        active: false,
        iconPath: 'assets/icons/message.svg',
        mobileMode: true,
        spaceBefore: true,
      },
      {
        path: 'notification',
        name: 'Notification',
        active: false,
        iconPath: 'assets/icons/bell.svg',
        mobileMode: true,
      },
    ];
    this.collapsed = false;
  }

  ngOnInit() {}

  toggleMenuItem(index: number): void {
    this.menu
      .filter((menu: MenuItem, i: number) => i !== index && menu.active)
      .forEach((menu: MenuItem) => (menu.active = !menu.active));

    this.menu[index].active = !this.menu[index].active;
  }

  generateIconPath(menuItem: MenuItem): string {
    return menuItem.iconPath ?? 'assets/icons/menu/' + menuItem.path + '.svg';
  }

  toggleMenu(): void {
    this.collapsed = !this.collapsed;
  }
}
