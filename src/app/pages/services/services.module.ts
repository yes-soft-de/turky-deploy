import { NgModule } from '@angular/core';
import { ThemeModule } from 'src/app/@theme/theme.module';

import { ServicesRoutingModule } from './services-routing.module';
import { AllServicesComponent } from './components/all-services/all-services.component';
import { ServicesDetailsComponent } from './components/services-details/services-details.component';
import { StoreModule } from '@ngrx/store';
import * as fromService from './store/service.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ServiceEffects } from './store/service.effects';


@NgModule({
  declarations: [AllServicesComponent, ServicesDetailsComponent],
  imports: [
    ThemeModule,
    ServicesRoutingModule,
    StoreModule.forFeature(fromService.servicesFeatureKey, fromService.reducer),
    EffectsModule.forFeature([ServiceEffects])
  ]
})
export class ServicesModule { }
