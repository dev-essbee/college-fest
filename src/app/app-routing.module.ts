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
import {EventsSmallComponent} from './home/events-small/events-small.component';


const appRoutes: Routes = [
  {path: 'team', component: TeamComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'events', component: EventsComponent},
  {path: 'sponsors', component: SponsorsComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'events/:id', component: EventDetailComponent},
  {path: 'temp', component: EventsSmallComponent},
  {path: '**', component: HomeComponent}

];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    routerOptions
    // todo: comment in production
    // {enableTracing: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

// todo: hyperlink bookmark.
