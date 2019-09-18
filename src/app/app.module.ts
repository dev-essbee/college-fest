import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EventsComponent} from './events/events.component';
import {RegisterComponent} from './register/register.component';
import {TeamComponent} from './team/team.component';
import {NavigationComponent} from './navigation/navigation.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {environment} from '../environments/environment';
// firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {DashboardComponent} from './dashboard/dashboard.component';

import {MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    RegisterComponent,
    TeamComponent,
    NavigationComponent,
    SponsorsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
