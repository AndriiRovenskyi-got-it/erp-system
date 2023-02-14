import { Component, OnInit } from '@angular/core';

export interface Announcement {
  title: string;
  description: string;
  date: string;
  class: string;
}

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
})
export class AnnouncementsComponent implements OnInit {
  public announcements: Array<Announcement> = [
    {
      title: 'Welcome!',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
      date: '10/09/2022',
      class: 'Advanced Math Class',
    },
    {
      title: 'Live class with instructor',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui.',
      date: '10/09/2022',
      class: 'Advanced Math Class',
    },
    {
      title: 'Welcome!',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
      date: '10/09/2022',
      class: 'Advanced Math Class',
    },
  ];
  announcementsQuantity = 5;

  constructor() {}

  ngOnInit(): void {}
}
