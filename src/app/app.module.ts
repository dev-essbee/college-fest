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
import {NgwWowModule} from 'ngx-wow';

// firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {DashboardComponent} from './dashboard/dashboard.component';


// angular material
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {EventsSmallComponent} from './home/events-small/events-small.component';
import {FooterComponent} from './footer/footer.component';
import {NgsRevealModule} from 'ngx-scrollreveal';
import {SponsorsHomeComponent} from './home/sponsors-home/sponsors-home.component';
import {CustomSnackbarComponent} from './custom-snackbar/custom-snackbar.component';
import { TeamRegisterComponent } from './team-register/team-register.component';


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
    EventDetailComponent,
    EventsSmallComponent,
    FooterComponent,
    SponsorsHomeComponent,
    CustomSnackbarComponent,
    TeamRegisterComponent,


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
    ReactiveFormsModule,
    FormsModule,
    NgsRevealModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CustomSnackbarComponent]
})
export class AppModule {
}
