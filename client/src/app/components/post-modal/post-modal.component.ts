import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { PostsService } from 'src/app/services/posts.servie';
import { ResourceService } from 'src/app/services/resource.service';
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
  $regions: Observable<string[]>;
  $types: Observable<string[]>;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private loginService: LoginService,
    private resourceService: ResourceService
  ) {
    super();
    this.form = this.formBuilder.group({
      img: [],
      title: [],
      text: [],
      region: [],
      type: [],
    });
    this.$regions = this.resourceService.getRegions();
    this.$types = this.resourceService.getTypes();
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
          // this.form.reset();
          this.afterSave.emit();
        })
    );
  }
}
