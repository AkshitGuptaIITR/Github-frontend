import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { SpinnerComponent } from './spinner/spinner.component';
import { InfoComponent } from './info/info.component';
import { UsernameComponent } from './username/username.component';
import { NotificationComponent } from './notification/notification.component'

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    InfoComponent,
    UsernameComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
