import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  limit,
  orderBy,
  QueryDocumentSnapshot,
  where,
} from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { startAfter } from 'firebase/firestore';
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
  posts: QueryDocumentSnapshot<Post>[] = [];
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
    const { type, region } = this.filter;
    const cond = [orderBy('createdAt', 'desc'), limit(10)];
    if (type) {
      cond.push(where('type', '==', type));
    }
    if (region) {
      cond.push(where('region', '==', region));
    }
    if (this.userId) {
      cond.push(where('from.id', '==', this.userId));
    }
    if (page > 0 && this.posts.length) {
      cond.push(startAfter(this.posts[this.posts.length - 1]));
    }
    this.addSub(
      this.postsService.list().subscribe((query) => {
        if (page === 0) {
          this.posts = query.docs;
        } else {
          this.posts = this.posts.concat(query.docs);
        }
        this.infinityScroll.complete();
        this.loading = false;
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
