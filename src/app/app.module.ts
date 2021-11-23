import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LifecycleLoggerComponent } from './components/lifecycle-logger/lifecycle-logger.component';
import {HttpClientModule} from '@angular/common/http';
import { ClockComponent } from './components/clock/clock.component';
import { TimeDigitPipe } from './pipes/time-digit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    UserListComponent,
    LifecycleLoggerComponent,
    ClockComponent,
    TimeDigitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
