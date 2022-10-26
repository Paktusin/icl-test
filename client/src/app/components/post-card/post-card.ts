import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { environment } from 'src/environments/environment';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.html',
  styleUrls: ['./post-card.scss'],
})
export class PostCardComponent extends BaseComponent {
  @Input() post: Post;
  @Input() canDelete;
  @Input() hideAuthor;
  @Output() delete = new EventEmitter();

}
