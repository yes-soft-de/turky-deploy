import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Service } from '../model/service.model';
import * as ServiceActions from './service.actions';

export const servicesFeatureKey = 'services';

export interface StateServices extends EntityState<Service> {
  // additional entities state properties
  Data: Service[];
  serviceDetails: Service;
}

export const adapter: EntityAdapter<Service> = createEntityAdapter<Service>();

export const initialState: StateServices = adapter.getInitialState({
  // additional entity state properties
  Data: undefined,
  serviceDetails: undefined
});


export const reducer = createReducer(
  initialState,  
  on(ServiceActions.loadServicesSuccess,
    (state, action) => adapter.setAll(action.services, state)
  ),
  on(ServiceActions.loadServiceSuccess,
    (state, action) => {
      return {
        ...state,
        serviceDetails: action.service
      };
    }
  ),
  on(ServiceActions.deleteServiceSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),

  on(ServiceActions.addService,
    (state, action) => adapter.addOne(action.service, state)
  ),
  on(ServiceActions.upsertService,
    (state, action) => adapter.upsertOne(action.service, state)
  ),
  on(ServiceActions.addServices,
    (state, action) => adapter.addMany(action.services, state)
  ),
  on(ServiceActions.upsertServices,
    (state, action) => adapter.upsertMany(action.services, state)
  ),
  on(ServiceActions.updateService,
    (state, action) => adapter.updateOne(action.service, state)
  ),
  on(ServiceActions.updateServices,
    (state, action) => adapter.updateMany(action.services, state)
  ),
  on(ServiceActions.deleteServices,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ServiceActions.clearServices,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
