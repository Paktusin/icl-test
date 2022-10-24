import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat.component';

const mainRoutes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: '', redirectTo: 'chat', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
