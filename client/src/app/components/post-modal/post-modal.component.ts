import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { off } from 'process';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Resources } from 'src/app/interfaces/Resources';
import { FireService } from 'src/app/services/fire.service';
import { PostsService } from 'src/app/services/posts.servie';
import { UserService } from 'src/app/services/user.service';
import { BaseComponent } from '../base.component';

@Component({
  templateUrl: './post-modal.component.html',
  selector: 'app-post-modal',
  styleUrls: ['./post-modal.component.scss'],
})
export class PostModalComponent extends BaseComponent {
  @Input() visible = false;

  @Output() afterSave = new EventEmitter();

  @ViewChild(IonModal) modal: IonModal;

  form: FormGroup;
  regions = Resources.regions;
  types = Resources.types;
  fileBase64?: string;
  fileName?: string;
  inputImgUrl = false;

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

  onFileChange($event: Event) {
    const fileEl = $event.target as HTMLInputElement;
    const file = fileEl.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.fileName = file.name;
        this.fileBase64 = reader.result as string;
        fileEl.value = null;
      };
      reader.readAsDataURL(file);
    }
  }

  open() {
    this.visible = true;
  }

  clear() {
    this.form.reset();
    this.fileBase64 = '';
    this.fileName = '';
  }

  save() {
    const id = FireService.newId();
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.addSub(
      (this.inputImgUrl
        ? of(this.form.value.img)
        : this.postsService.uploadImage(
            `post/${id}/${this.fileName}`,
            this.fileBase64
          )
      )
        .pipe(
          switchMap((downloadUrl) =>
            this.postsService.save({
              ...this.form.value,
              from: this.userService.currentUser,
              createdAt: new Date().valueOf(),
              img: downloadUrl,
              id,
            })
          )
        )
        .subscribe(
          () => {
            this.visible = false;
            this.loading = false;
            this.clear();
            this.afterSave.emit();
          },
          () => {
            this.loading = false;
          }
        )
    );
  }
}
