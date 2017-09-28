import { Component, OnInit } from '@angular/core';
import { FavouriteChangedEventArgs } from '../favourite/favourite.component'

@Component({
  selector: 'all-examples',
  templateUrl: './all-examples.component.html',
  styleUrls: ['./all-examples.component.css']
})
export class AllExamplesComponent {

  post = {
    title: "Title",
    isFavourite: true
  }

  onFavouriteChange(eventArgs: FavouriteChangedEventArgs) {
    console.log("Favourite Changed: ", eventArgs);
  }

  tweet = {
    body: "Here is the body of the tweet...",
    isLiked: true,
    likesCount: 10
  }

}
