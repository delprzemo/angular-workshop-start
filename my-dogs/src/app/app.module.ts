import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { HomeComponent } from './home/home.component';
import { DogListService } from './dogs-list/services/dog-list.service';

@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DogListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
