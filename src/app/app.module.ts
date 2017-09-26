import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { CoursesService } from './course/courses.service';
import { AuthorsService } from './author/authors.service';

import { SummaryPipe } from './course/summary.pipe';
import { TitleCasePipe } from './input/title-case.pipe';

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
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
