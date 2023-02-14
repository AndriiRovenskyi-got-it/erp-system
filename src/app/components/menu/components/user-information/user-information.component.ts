import { Component, Input, OnInit } from '@angular/core';
import { HideAnimation } from '../../constants/animations';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
  animations: [HideAnimation],
})
export class UserInformationComponent implements OnInit {
  @Input() collapsed?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
