import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Service } from '../../model/service.model';
import * as serviceAction from '../../store/service.actions';
import { StateServices } from '../../store/service.reducer';
import { allServicesSelector } from '../../store/service.selector';


@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.scss']
})
export class AllServicesComponent implements OnInit {
  services: Service[];
  servicesList: Service[] = [];
  servicesFilterList: Service[] = [];                     // We Create It Second For Filter
  error$: Observable<string>;
  isDeleted = false;
  config: any;                                          // Config Variable For Pagination Configuration
  name: string;

  constructor(private store: Store<StateServices>,
              private toaster: ToastrService) { }

 
  ngOnInit(): void {
    this.store.dispatch(serviceAction.loadServices());
    this.getAllServices();
  }

  getAllServices() {
    this.store.select(allServicesSelector).subscribe(
      (allServices: any) => {
        if (allServices) {          
          console.log('all services', allServices);
          this.services = allServices;
          this.servicesList = allServices;
          this.servicesFilterList = this.servicesList;
          this.isDeleted = false;
          // pagination config
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.servicesList.length
          };
        }
      }
    );
  }

  // Handle Response Error
  handleError(error) {
    console.log('error : ', error);
    if (error) {
      if (error.error.error) {
        this.toaster.error(error.error.error);
      }
      if (error.error.msg) {
        this.toaster.error(error.error.msg);
      } else {
        this.toaster.error('Server Error');
      }
    }
  }

  // Fetch The Page Number On Page Change
  pageChanged(event) {
    this.config.currentPage = event;
  }

  // Delete The Service
  delete(serviceId: string) {
    if (confirm('Are You Sure You Want To Delete This Service')) {
      this.isDeleted = true;
      this.store.dispatch(serviceAction.deleteService({id: serviceId}));
      // this.toaster.success('Device Successfully Deleted');
      setTimeout(() => { this.isDeleted = false; }, 1000);
    } else {
      return false;
    }
  }


  applyFilter() {
    // if the search input value is empty
    if (!this.name) {
      this.servicesFilterList = [...this.servicesList];
    } else {
      this.servicesFilterList = [];
      this.servicesFilterList = this.servicesList.filter(res => {
        if (res.userName) {
          const username = res.userName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (username) {
            // display the Name Column
            return username;
          }
        }
        if (res.title) {
          const title = res.title.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (title) {
            // display the Name Column
            return title;
          }
        }
        if (res.categoryName) {
          const categoryName = res.categoryName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (categoryName) {
            // display the Name Column
            return categoryName;
          }
        }
      });
    }
  }

}
