import { Component, OnInit } from '@angular/core';
import { appName } from 'src/app/app.config';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public appName = appName;
  constructor(
    public Title: Title,
  ) { }

  ngOnInit(): void {
    this.Title.setTitle(`${appName}`);
  }

}
