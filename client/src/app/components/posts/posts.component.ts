import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post as Post } from 'src/app/interfaces/Post';
import { PostsService } from 'src/app/services/posts.servie';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './posts.component.html',
})
export class PostsComponent extends BaseComponent implements OnInit {
  text = '';
  page = 0;
  posts: Post[] = [];
  form: FormGroup;
  modalVisible = false;

  constructor(
    private postsService: PostsService,
    private activeRoute: ActivatedRoute
  ) {
    super();
    this.activeRoute.data.subscribe((data) => {
      this.modalVisible = !!data.new;
    });
  }

  ngOnInit(): void {
    this.loadMore(0);
  }

  loadMore(page = this.page + 1) {
    this.loading = true;
    this.addSub(
      this.postsService.list(page).subscribe((messages) => {
        this.page = page;
        if (page === 0) {
          this.posts = messages;
        } else {
          this.posts = this.posts.concat(messages);
        }
        this.loading = false;
      })
    );
  }
}
