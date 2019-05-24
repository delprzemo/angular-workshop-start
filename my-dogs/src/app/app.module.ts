import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { HomeComponent } from './home/home.component';
import { DogListService } from './dog-list/services/dog-list.service';
import { DogListItemComponent } from './dog-list/dog-list-item/dog-list-item.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    HomeComponent,
    DogListItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DogListService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
