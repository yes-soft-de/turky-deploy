import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll, servicesFeatureKey, StateServices } from "./service.reducer";

const ServiceState = createFeatureSelector(servicesFeatureKey);

export const allServicesSelector = createSelector(ServiceState, selectAll);

export const serviceDetailsSelector = createSelector(ServiceState, (state: StateServices) => state.serviceDetails);

