import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientService, GmOptions } from '@static-resources';

@Injectable()
export class ConfigurationService {
  constructor(
    private http: HttpClient
  ) { }
  private httpClientService = new HttpClientService(this.http);
  getData(gmParams?: object, options?: GmOptions): Observable<any> {
    return this.httpClientService
      .getRequest('http://192.168.5.35:8048/zrzy-register-server/api/queryRegistrationInfo/getComprehensivePageList', gmParams, options);
  }
}
