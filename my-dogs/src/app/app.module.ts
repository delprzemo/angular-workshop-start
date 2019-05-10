import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { HomeComponent } from './home/home.component';
import { DogListItemComponent } from './dogs-list/dog-list-item/dog-list-item.component';
import { HelpComponent } from './help/help.component';
import { DogItem } from './dogs-list/models/dog-item';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    HomeComponent,
    DogListItemComponent,
    HelpComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
