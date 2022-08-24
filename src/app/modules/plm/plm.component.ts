import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cnlModel } from './cnl-record.model';
import { PlmService } from './plm.service';

@Component({
  selector: 'cosap-plm',
  templateUrl: './plm.component.html',
  styleUrls: ['./plm.component.scss'],
  styles:[`
            .k-textbox {
            width: 350px;
            }`
         ]
})
export class PlmComponent implements OnInit {

  filterdCnlData!:any;
  allPlmData!: cnlModel[];
  subscriber!: Subscription;
  styleQueryTableData!:any;
  styleColorQueryTableData!:any;
  styleSizeQueryTableData!:any;
 
  
  private _cnlDataFilter : string = '';

  set cnlDataFilter(value:string)
  {
     this._cnlDataFilter = value;  
  }

  get cnlDataFilter()
  {
    return this._cnlDataFilter;
  }

  constructor(private plmService:PlmService) { }

  ngOnInit(): void {
    this.subscriber = this.plmService.getPlmData().subscribe({
      next: data => {
        this.allPlmData = data;
      }
    })  
  }
  
  public getDataByCnl(cnlNumber: string) {       // get By cnl method
    console.log(cnlNumber)
    this.plmService.getCnlData(cnlNumber).subscribe({
      next: (data) => {
      
        this.filterdCnlData= data; 

        this.styleQueryTableData = data.record.filter((i:any)=>i.queryName == "style-query");
       
        this.styleColorQueryTableData =data.record.filter((i:any)=>i.queryName == "style-color-query");
 
        this.styleSizeQueryTableData = data.record.filter((i:any)=>i.queryName == "style-size-query");
        
      },
    });
  }

}
