import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
})
export class MeetingComponent implements OnInit {
  public notification = 'Physics meeting!';
  public notificationDescription =
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.';
  public notificationDate = '10/09/2022';

  constructor() {}

  ngOnInit(): void {}
}
