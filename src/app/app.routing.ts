import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { DbcafeComponent } from './dbcafe/dbcafe.component';
import { OfficersComponent } from './officers/officers.component';
import { EventsComponent } from './events/events.component';

// Route Configuration
export const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'officers', component: OfficersComponent},
	{ path: 'dbcafe', component: DbcafeComponent},
	{ path: 'events', component: EventsComponent}
	];
export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);