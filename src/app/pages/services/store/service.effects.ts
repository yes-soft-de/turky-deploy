import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { create } from 'node:domain';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { ServicesService } from '../services/services.service';
import * as serviceActions from './service.actions';


@Injectable()
export class ServiceEffects {



  constructor(private actions$: Actions,
              private services: ServicesService,
              private toaster: ToastrService) {}

  loadServices$ = createEffect(() => this.actions$.pipe(
    ofType(serviceActions.loadServices),
    switchMap(() => this.services.allServices()
      .pipe(
        map(response => {
          console.log('response : ', response);
          return serviceActions.loadServicesSuccess({services: response.Data});
        }),
        catchError(error => {
          console.log('error : ', error);
          return of(serviceActions.loadServicesFailure({error}))
        })
      ))
  ));

  loadService$ = createEffect(() => this.actions$.pipe(
    ofType(serviceActions.loadService),
    switchMap(action => this.services.serviceDetails(action.id)
      .pipe(
        map((response: any) => {
          return serviceActions.loadServiceSuccess({service: response.Data});
        }),
        catchError(error => {
          console.log('error : ', error);
          return of(serviceActions.loadServiceFailure({error}))
        })
      ))
  ));
  
  deleteService$ = createEffect(() => this.actions$.pipe(
    ofType(serviceActions.deleteService),
    exhaustMap(action => this.services.deleteService(action.id)
      .pipe(
        map((response: any) => {
          this.toaster.success(response.msg);
          return serviceActions.deleteServiceSuccess({id: action.id});
        }),
        catchError(error => {
          console.log('error : ', error);
          return of(serviceActions.deleteServiceFailure({error}))
        })
      ))
  ), { dispatch: false });

}
