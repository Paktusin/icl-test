import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { Resources } from 'src/app/interfaces/Resources';
import { PostsService } from 'src/app/services/posts.servie';
import { UserService } from 'src/app/services/user.service';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './post-modal.component.html',
  selector: 'app-post-modal',
})
export class PostModalComponent extends BaseComponent {
  @Input() visible = false;

  @Output() afterSave = new EventEmitter();

  @ViewChild(IonModal) modal: IonModal;

  form: FormGroup;
  regions = Resources.regions;
  types = Resources.types;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private userService: UserService
  ) {
    super();
    this.form = this.formBuilder.group({
      img: [],
      title: [],
      text: [],
      region: [],
      type: [],
    });
  }

  open() {
    this.visible = true;
  }

  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.addSub(
      this.postsService
        .save({
          ...this.form.value,
          from: this.userService.currentUser,
          createdAt: new Date().valueOf(),
        })
        .subscribe(() => {
          this.visible = false;
          this.loading = false;
          this.form.reset();
          this.afterSave.emit();
        })
    );
  }
}
