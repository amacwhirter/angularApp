import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'traversal',
  templateUrl: './traversal.component.html',
  styleUrls: ['./traversal.component.css']
})

export class TraversalComponent {
  task = {
    title: 'Review Applications',
    assignee: {
      name: 'John Smith'
    }
  }
}
