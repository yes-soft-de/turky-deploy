import { environment } from "src/environments/environment.prod";

export class AdminConfig {
  // An Example | Delete The Content When Started
  // source api
  public static sourceAPI                   = environment.sourceApi;
  // public static sourceAPI                   = 'http://localhost:8000/';

  // All Application Api
  public static loginAPI                    = AdminConfig.sourceAPI + 'login_check';
  public static userAPI                     = AdminConfig.sourceAPI + 'user';

  // Products
  public static productsAPI                 = AdminConfig.sourceAPI + 'allproperties';

  // Real Estate
  public static allRealEstateAPI            = AdminConfig.sourceAPI + 'allRealEstate';
  public static getRealEstateAPI            = AdminConfig.sourceAPI + 'realEstate';
  public static deleteRealEstateAPI         = AdminConfig.sourceAPI + 'realEstate';

  // Cars
  public static allCarsAPI                  = AdminConfig.sourceAPI + 'allCars';
  public static getCarAPI                   = AdminConfig.sourceAPI + 'car';
  public static deleteCarAPI                = AdminConfig.sourceAPI + 'cars';

  // Devices
  public static allDevicesAPI               = AdminConfig.sourceAPI + 'allDevices';
  public static getDeviceAPI                = AdminConfig.sourceAPI + 'device';
  public static deleteDeviceAPI             = AdminConfig.sourceAPI + 'devices';

  // Reports
  public static reportsAPI                  = AdminConfig.sourceAPI + 'reports';
  public static reportAPI                   = AdminConfig.sourceAPI + 'report';
  public static deleteReportAPI             = AdminConfig.sourceAPI + 'deletereport';

  // Chats
  public static chatsAPI                    = AdminConfig.sourceAPI + 'getallchat';

  // Statistics
  public static statisticsAPI               = AdminConfig.sourceAPI + 'statistics';
  
  // Services
  public static allServicesAPI              = AdminConfig.sourceAPI + 'allservices';
  public static servicesAPI                 = AdminConfig.sourceAPI + 'services';
  
  // Categories
  public static categoriesAPI                = AdminConfig.sourceAPI + 'categories';
  public static categoryAPI                  = AdminConfig.sourceAPI + 'category';


  // Upload
  public static generalUploadAPI            = AdminConfig.sourceAPI + 'uploadfile';
}
