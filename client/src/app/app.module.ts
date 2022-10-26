import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SessionInterceptor } from './interceptors/session.interceptor';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PostModalComponent } from './components/post-modal/post-modal.component';
import { PostsComponent } from './components/posts/posts.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';
import { CurrentUserComponent } from './components/user/current-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostCardComponent } from './components/post-card/post-card';
import { TagComponent } from './components/tag/tag';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs/breadcrumbs';
import { UsersComponent } from './components/users/users';
import { FilterComponent } from './components/filter/filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    PostsComponent,
    PostModalComponent,
    PostComponent,
    UserComponent,
    CurrentUserComponent,
    ProfileComponent,
    PostCardComponent,
    TagComponent,
    BreadcrumbsComponent,
    UsersComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionInterceptor,
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
