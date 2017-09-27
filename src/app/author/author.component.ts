import { Component } from '@angular/core';

import { AuthorsService } from './../services/authors.service';

@Component({
  selector: 'authors',
  //string interpolation{{x}}
  template: `
        <h2>{{ title }}</h2>
        <ul>
          <li *ngFor="let author of authors">
            {{ author }}
          </li>
        </ul>
      `
})

export class AuthorComponent {
  title = "List of Authors";
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}
