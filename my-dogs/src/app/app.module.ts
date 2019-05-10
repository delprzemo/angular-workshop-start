import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { HomeComponent } from './home/home.component';
import { DogListItemComponent } from './dogs-list/dog-list-item/dog-list-item.component';
import { HelpComponent } from './help/help.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AccountService } from './common/account-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HideTextPipe } from './common/pipes/hide-text.pipe';
import { HighlightTextDirective } from './common/directives/highlight-text.directive';
import { DescriptionComponent } from './common/componets/description/description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DogsListComponent,
    HomeComponent,
    DogListItemComponent,
    HelpComponent,
    LoginFormComponent,
    HideTextPipe,
    HighlightTextDirective,
    DescriptionComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
