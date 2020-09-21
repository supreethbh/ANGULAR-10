import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AnalyticsComponent } from './service/analytics/analytics.component';
import { ApplicationsComponent } from './service/applications/applications.component';
import { BusinessComponent } from './service/business/business.component';
import { CloudComponent } from './service/cloud/cloud.component';
import { TeamComponent } from './team/team.component';
import { AuthGuardService } from './web-service/auth-guard.service';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full', canActivate:[AuthGuardService]},
  {path:'home', component: HomeComponent, canActivate:[AuthGuardService]},
  {path:'about-us', component: AboutUsComponent, canActivate:[AuthGuardService]},
  {path:'team', component: TeamComponent, canActivate:[AuthGuardService]},
  {path:'contact-us', component: ContactUsComponent, canActivate:[AuthGuardService]},

  {path:'service/applications', component: ApplicationsComponent},
  {path:'service/cloud', component: CloudComponent},
  {path:'service/business', component: BusinessComponent},
  {path:'service/analytics', component: AnalyticsComponent},

  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
