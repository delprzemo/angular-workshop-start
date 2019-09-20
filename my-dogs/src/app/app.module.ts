import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { HomeComponent } from './home/home.component';
import { DogListService } from './dogs-list/services/dog-list.service';
import { ListItemComponent } from './dogs-list/list-item/list-item.component';
import { HelpComponent } from './help/help.component';
import { MockedHttpService } from './utils/mocked-http.service';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    HomeComponent,
    ListItemComponent,
    HelpComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DogListService, MockedHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
