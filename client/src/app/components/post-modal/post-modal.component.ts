import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
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
    private postsService: PostsService,
    private loginService: LoginService
  ) {
    super();
    this.form = this.formBuilder.group({
      img: ['https://picsum.photos/300/200'],
      title: ['some post'],
      text: [
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      ],
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
        .create({ ...this.form.value, from: this.loginService.user })
        .subscribe(() => {
          this.visible = false;
          this.loading = false;
          this.form.reset();
          this.afterSave.emit();
        })
    );
  }
}
