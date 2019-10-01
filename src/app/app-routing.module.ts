import {NgModule} from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {TeamComponent} from './team/team.component';
import {RegisterComponent} from './register/register.component';
import {EventsComponent} from './events/events.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './auth.guard';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {TeamRegisterComponent} from './team-register/team-register.component';


const appRoutes: Routes = [
  {path: 'team', component: TeamComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'events', component: EventsComponent},
  {path: 'sponsors', component: SponsorsComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'events/:id', component: EventDetailComponent},
  {path: 'team-register/:id', component: TeamRegisterComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent}

];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    routerOptions
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
