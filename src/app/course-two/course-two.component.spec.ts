import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTwoComponent } from './course-two.component';

describe('CourseTwoComponent', () => {
  let component: CourseTwoComponent;
  let fixture: ComponentFixture<CourseTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
