import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { Post as Post } from 'src/app/interfaces/Post';
import { PostsService } from 'src/app/services/posts.servie';
import { UserService } from 'src/app/services/user.service';
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
    private userService: UserService
  ) {
    super();
    this.activeRoute.data.subscribe((data) => {
      this.modalVisible = !!data.new;
    });
  }

  get currentUser() {
    return this.userService.currentUser;
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      this.filter = params;
      this.loadMore(0);
    });
  }

  loadMore(page = this.page + 1) {
    this.loading = true;
    this.addSub(
      this.postsService
        .listParams({ ...this.filter, page, userId: this.userId })
        .subscribe((posts) => {
          if (page === 0) {
            this.posts = posts;
          } else {
            this.posts = this.posts.concat(posts);
          }
          this.infinityScroll.complete();
          this.loading = false;
        })
    );
  }

  delete() {
    this.addSub(
      this.postsService.delete(this.posts[this.delIndex].id).subscribe(() => {
        this.posts.splice(this.delIndex, 1);
        this.delIndex = undefined;
      })
    );
  }
}
