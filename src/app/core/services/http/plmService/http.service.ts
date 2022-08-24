import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cnlModel } from '../../../../modules/plm/cnl-record.model';
import { environment } from 'src/environments/environment.plm';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private plmUrl: string = environment.plmServerUri;

  constructor(private http:HttpClient) { }

  getAllPlmData():Observable<cnlModel[]>
  {
        return this.http.get<cnlModel[]>(this.plmUrl);
  }

  getCnlData(cnlNumber:string):Observable<cnlModel>{
    return this.http.get<cnlModel>(`${this.plmUrl}/${cnlNumber}`);
  }
}
