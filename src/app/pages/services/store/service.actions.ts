import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Service } from '../model/service.model';

export const loadServices = createAction(
  '[Service/API] Load Services'
);

export const loadServicesSuccess = createAction(
  '[Service/API] Load Services Success', 
  props<{ services: Service[] }>()
);

export const loadServicesFailure = createAction(
  '[Service/API] Load Services Failure', 
  props<{ error: string }>()
);

export const loadService = createAction(
  '[Service/API] Load Service',
  props<{ id: string }>()
);

export const loadServiceSuccess = createAction(
  '[Service/API] Load Service Success', 
  props<{ service: Service }>()
);

export const loadServiceFailure = createAction(
  '[Service/API] Load Service Failure', 
  props<{ error: string }>()
);

export const deleteService = createAction(
  '[Service/API] Delete Service',
  props<{ id: string }>()
);

export const deleteServiceSuccess = createAction(
  '[Service/API] Delete Service Success',
  props<{ id: string }>()
);

export const deleteServiceFailure = createAction(
  '[Service/API] Delete Service Failure',
  props<{ error: string }>()
);


export const addService = createAction(
  '[Service/API] Add Service',
  props<{ service: Service }>()
);

export const upsertService = createAction(
  '[Service/API] Upsert Service',
  props<{ service: Service }>()
);

export const addServices = createAction(
  '[Service/API] Add Services',
  props<{ services: Service[] }>()
);

export const upsertServices = createAction(
  '[Service/API] Upsert Services',
  props<{ services: Service[] }>()
);

export const updateService = createAction(
  '[Service/API] Update Service',
  props<{ service: Update<Service> }>()
);

export const updateServices = createAction(
  '[Service/API] Update Services',
  props<{ services: Update<Service>[] }>()
);


export const deleteServices = createAction(
  '[Service/API] Delete Services',
  props<{ ids: string[] }>()
);

export const clearServices = createAction(
  '[Service/API] Clear Services'
);
