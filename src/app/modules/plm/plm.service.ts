import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/http/plmService/http.service';
import { cnlModel } from './cnl-record.model';

@Injectable({
  providedIn: 'root'
})
export class PlmService {

  constructor(private httpService: HttpService) { }

  getPlmData():Observable<cnlModel[]>
  {
     return this.httpService.getAllPlmData();
  }

  getCnlData(cnlNumber:string):Observable<cnlModel>
  {
     return this.httpService.getCnlData(cnlNumber);
  }
}
