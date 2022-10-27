import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users';
import { ProfileResolver } from './resolvers/profile.resolver';
import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { PostResolver } from './resolvers/post.resolver';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(() => redirectLoggedInTo('')),
  },
  {
    path: '',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo('/login')),
    children: [
      { path: 'users', component: UsersComponent },
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
  },
];

@NgModule({
  providers: [PostResolver, ProfileResolver],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
