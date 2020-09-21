import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TeamComponent } from './team/team.component';
import { ApplicationsComponent } from './service/applications/applications.component';
import { BusinessComponent } from './service/business/business.component';
import { AnalyticsComponent } from './service/analytics/analytics.component';
import { CloudComponent } from './service/cloud/cloud.component';

import { AuthGuardService } from './web-service/auth-guard.service';
import { AuthenticationService } from './web-service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    LogoutComponent,
    TeamComponent,
    ApplicationsComponent,
    BusinessComponent,
    AnalyticsComponent,
    CloudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthGuardService, 
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
