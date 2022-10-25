import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/Post';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './post.component.html',
})
export class PostComponent extends BaseComponent {
  post: Post;

  constructor(private activeRoute: ActivatedRoute) {
    super();
    this.activeRoute.data.subscribe((data) => {
      this.post = data.post;
    });
  }
}
