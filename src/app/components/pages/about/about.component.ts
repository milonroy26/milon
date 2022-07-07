import { Component, OnInit } from '@angular/core';
import { appName } from 'src/app/app.config';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public appName = appName;
  constructor(
    public title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle(`${appName}`);
  }

}
