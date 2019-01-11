import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component'; 
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'posts',
    component: PostsComponent,
    // children:[
    //   { path:':id', component: DetailsComponent }
    // ]
  },
  {
    path:'posts/:id',
    component: DetailsComponent
  },
  {
    path:'users',
    component: UsersComponent,
    children:[
      {path:'', component: UsersComponent },
      {path: ':id', component: DetailsComponent}
    ]
  },
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {
    path:'demo',
    component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*export const routingComponents*/