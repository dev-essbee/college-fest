import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeamComponent} from './team/team.component';
import {RegisterComponent} from './register/register.component';
import {EventsComponent} from './events/events.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './auth.guard';


const appRoutes: Routes = [
  {path: 'team', component: TeamComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'events', component: EventsComponent},
  {path: 'sponsors', component: SponsorsComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    // todo: comment in production
    // {enableTracing: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
