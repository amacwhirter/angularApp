import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  archives = [
    { year: 2017, month: 1},
    { year: 2017, month: 2},
    { year: 2017, month: 3},
  ]
  constructor() { }

  ngOnInit() {
  }

}
