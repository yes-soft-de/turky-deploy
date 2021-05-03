import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { ServicesDetailsComponent } from './components/services-details/services-details.component';


const routes: Routes = [
  { path: '', component: AllServicesComponent },
  { path: ':id', component: ServicesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
