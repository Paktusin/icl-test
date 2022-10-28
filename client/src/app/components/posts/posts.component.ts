import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Post as Post } from 'src/app/interfaces/Post';
import { LoginService } from 'src/app/services/login.service';
import { PostsService } from 'src/app/services/posts.servie';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent extends BaseComponent implements OnInit {
  @Input() userId?: string;

  @ViewChild(IonInfiniteScroll) infinityScroll: IonInfiniteScroll;

  text = '';
  page = 0;
  posts: Post[] = [];
  form: FormGroup;
  modalVisible = false;
  delIndex?: number;
  filter: any = {};

  constructor(
    private postsService: PostsService,
    private activeRoute: ActivatedRoute,
    private loginService: LoginService
  ) {
    super();
    this.activeRoute.data.subscribe((data) => {
      this.modalVisible = !!data.new;
    });
  }

  get currentUser() {
    return this.loginService.user;
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      this.filter = params;
      this.loadMore(0);
    });
  }

  loadMore(page = this.page + 1) {
    this.addSub(
      this.postsService
        .list({
          skip: page * 10,
          limit: 10,
          userId: this.userId,
          ...this.filter,
        })
        .subscribe((messages) => {
          this.page = page;
          if (page === 0) {
            this.posts = messages;
          } else {
            this.posts = this.posts.concat(messages);
          }
          this.infinityScroll.complete();
        })
    );
  }

  delete() {
    this.addSub(
      this.postsService.delete(this.posts[this.delIndex]).subscribe(() => {
        this.posts.splice(this.delIndex, 1);
        this.delIndex = undefined;
      })
    );
  }
}
