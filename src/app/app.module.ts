import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { DbcafeComponent } from './dbcafe/dbcafe.component';
import { OfficersComponent } from './officers/officers.component';
import { EventsComponent } from './events/events.component';
import { UffcComponent } from './uffc/uffc.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    DbcafeComponent,
    OfficersComponent,
    EventsComponent,
    UffcComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
