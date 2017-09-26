import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamplesComponent } from './example.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AuthorsService } from './author/authors.service';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { InputComponent } from './input/input.component';
import { TitleCasePipe } from './input/title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { AuthorComponent } from './author/author.component';
import { CourseTwoComponent } from './course-two/course-two.component';

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
