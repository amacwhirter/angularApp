import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CoursesService } from './services/courses.service';
import { AuthorsService } from './services/authors.service';
import { PostService } from './services/post.service';

import { SummaryPipe } from './course/summary.pipe';
import { TitleCasePipe } from './input/title-case.pipe';

import { InputFormatDirective } from './input/input-format.directive';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { InputComponent } from './input/input.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { AuthorComponent } from './author/author.component';
import { CourseTwoComponent } from './course-two/course-two.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { ExamplesComponent } from './example/example.component';
import { CourseThreeComponent } from './course-three/course-three.component';
import { StyleComponent } from './style/style.component';
import { TraversalComponent } from './traversal/traversal.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddFormComponent } from './add-form/add-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form-component/new-course-form-component.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts-component/posts-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    ExamplesComponent,
    SummaryPipe,
    FavouriteComponent,
    InputComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    CourseTwoComponent,
    SwitchcaseComponent,
    CourseThreeComponent,
    StyleComponent,
    TraversalComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    AddFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
