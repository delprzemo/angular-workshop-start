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
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { ChangeColorDirective } from './directives/change-color.directive'
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    HomeComponent,
    DogListItemComponent,
    LoginComponent,
    CutTextPipe,
    ChangeColorDirective,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibWljaGxpcyIsImEiOiJjanZ4bWplcG8wNjhuNDNxaHRmaGpxbG1yIn0.Z4-1XADjLUTVZQp9JmNWcw'
    })
  ],
  providers: [DogListService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

