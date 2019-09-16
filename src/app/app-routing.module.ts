import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TeamComponent} from './team/team.component';
import {RegisterComponent} from './register/register.component';
import {EventsComponent} from './events/events.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
  {path: 'team', component: TeamComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'events', component: EventsComponent},
  {path: 'sponsors', component: SponsorsComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    // todo: remove in production
    // {enableTracing: true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
