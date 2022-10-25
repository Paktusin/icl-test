import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostResolver } from './services/post.resolver';

const routes: Routes = [
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
      { path: '', redirectTo: 'posts', pathMatch: 'prefix' },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  providers: [PostResolver],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
