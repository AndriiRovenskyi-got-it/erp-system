import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcements.component';

@Component({
  selector: 'app-announcement-item',
  templateUrl: './announcement-item.component.html',
  styleUrls: ['./announcement-item.component.scss'],
})
export class AnnouncementItemComponent implements OnInit {
  @Input() announcement: Announcement | undefined;

  constructor() {}

  ngOnInit(): void {}
}
