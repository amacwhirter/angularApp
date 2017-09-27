import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent {
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    this.http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      })
  }

  updatePost(post) {
    this.http.put(this.url + '/' + post.id, JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());
      })
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      })
  }
}
