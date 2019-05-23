import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogListComponent } from './dog-list/dog-list.component';

const routes: Routes = [
  {path: 'home',  component: HomeComponent},
  {path: 'dog-list',  component: DogListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
