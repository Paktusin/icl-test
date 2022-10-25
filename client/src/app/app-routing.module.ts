import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostResolver } from './services/post.resolver';
import { ProfileResolver } from './services/profile.resolver';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [LoginService],
    component: MainComponent,
    children: [
      { path: 'posts', component: PostsComponent },
      {
        path: 'posts/:id',
        component: PostComponent,
        resolve: { post: PostResolver },
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
        resolve: { user: ProfileResolver },
      },
      { path: '', redirectTo: 'posts', pathMatch: 'prefix' },
    ],
  }
];

@NgModule({
  providers: [PostResolver, ProfileResolver],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
