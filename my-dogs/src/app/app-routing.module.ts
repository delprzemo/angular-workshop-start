import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'dog-list', component: DogsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
