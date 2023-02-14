import { Component, OnInit } from '@angular/core';

interface Score {
  score: string;
  description: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profileName = 'Kathryn M. Bigelow';
  public profileImage = 'Avatar.svg';
  public profileNumber = 'ST54289';
  public profileClass = 'Advanced Math Class';
  public scheduledEndDate = '10 Jan 2023';
  public scores: Array<Score> = [
    { score: '3.2', description: 'Grade Point Average' },
    { score: '100%', description: 'Attendance Rate' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
