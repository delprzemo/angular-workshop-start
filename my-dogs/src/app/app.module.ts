import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { HomeComponent } from './home/home.component';
import { DogListService } from './dog-list/services/dog-list.service';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
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
