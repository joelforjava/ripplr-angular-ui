import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { RippleService } from './ripple.service';
import { AuthGuard } from './auth.guard';

import { AlertService } from './alert.service';
import { AuthenticationService } from './authentication.service';

import { RippleComponent } from './ripple/ripple.component';
import { AlertComponent } from './alert/alert.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RippleComponent,
    AlertComponent,
    TimelineComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RippleService, 
              AlertService,
              AuthGuard, 
              AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
