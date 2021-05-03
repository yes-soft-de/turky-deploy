import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminConfig } from '../../AdminConfig';
import { ServiceDetailsResponse } from '../model/service-details-response';
import { ServicesResponse } from '../model/service-response';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  allServices(): Observable<ServicesResponse> {
    return this.httpClient.get<ServicesResponse>(AdminConfig.allServicesAPI);
  }

  
  serviceDetails(serviceId : string): Observable<ServiceDetailsResponse> {
    return this.httpClient.get<ServiceDetailsResponse>(`${AdminConfig.servicesAPI}/${serviceId}`);
  }

  deleteService(serviceId : string): Observable<any> {
    return this.httpClient.delete<any>(`${AdminConfig.servicesAPI}/${serviceId}`);
  }
}
