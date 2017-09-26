import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseThreeComponent } from './course-three.component';

describe('CourseThreeComponent', () => {
  let component: CourseThreeComponent;
  let fixture: ComponentFixture<CourseThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
