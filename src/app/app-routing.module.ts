import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component'; 
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path:'',
    component:PostsComponent
  },
  {
    path:'post/:id',
    component: DetailsComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'user/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
