import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-three',
  templateUrl: './course-three.component.html',
  styleUrls: ['./course-three.component.css']
})
export class CourseThreeComponent {
  courses;

  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1 ' },
      { id: 2, name: 'course2 ' },
      { id: 3, name: 'course3 ' },
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
