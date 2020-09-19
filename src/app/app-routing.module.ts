import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegistComponent } from './regist/regist.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'' ,redirectTo:'login' , pathMatch:'full'},
  {path:'login' ,component:LoginComponent},
  {path:'movies' ,component:MoviesComponent},
  {path:'tv' ,component:TvComponent},
  {path:'people' ,component:PeopleComponent},
  {path:'regist' ,component:RegistComponent},
  {path:'**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
