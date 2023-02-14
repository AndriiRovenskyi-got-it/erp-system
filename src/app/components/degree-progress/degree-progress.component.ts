import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-degree-progress',
  templateUrl: './degree-progress.component.html',
  styleUrls: ['./degree-progress.component.scss'],
})
export class DegreeProgressComponent implements OnInit {
  public title = 'Degree Progress';
  public program = 'Advanced Math';
  value = 78;

  constructor() {}

  ngOnInit(): void {}
}
