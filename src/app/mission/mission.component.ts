import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mission',
  template: '<p>{{caption}}</p>'
})
export class MissionComponent implements OnInit {

  caption: string;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Mission accomplished');
  }

}
