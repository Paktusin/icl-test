import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { PostsService } from 'src/app/services/posts.servie';
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

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService
  ) {
    super();
    this.form = this.formBuilder.group({
      img: [],
      title: [],
      text: [],
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
      this.postsService.create(this.form.value).subscribe(() => {
        this.visible = false;
        this.loading = false;
        this.form.reset();
        this.afterSave.emit();
      })
    );
  }
}