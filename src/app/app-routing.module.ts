import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlertmatrixComponent } from './components/alertmatrix/alertmatrix.component';
import { ServerDetailsComponent } from './components/server-details/server-details.component'; 
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
	/** Setting default route - set path as empty and set the component */
	{ path : '', component : HomeComponent },
	{ path : 'courses', component : CoursesListComponent },
	{ path : 'servermanagement', component : ServerDetailsComponent },
	{ path : 'alertmatrix', component : AlertmatrixComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
