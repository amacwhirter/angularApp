import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  //string interpolation{{x}}
  template: `
        <h2>{{ title }}</h2>
        {{ course.title | uppercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.2-2' }} <br/>
        {{ course.price | currency:USD:true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'shortDate'}} <br/>
        {{ text | summary: 10 }}
      `
})

export class CourseComponent {
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
  text = `This is just dummy text to show how to create a custom pipe.`
}
