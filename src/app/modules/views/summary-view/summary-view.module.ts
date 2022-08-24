import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryViewRoutingModule } from './summary-view-routing.module';
import { SummaryViewComponent } from './summary-view.component';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from "@progress/kendo-angular-layout";


@NgModule({
  declarations: [
    SummaryViewComponent
  ],
  imports: [
    CommonModule,
    SummaryViewRoutingModule,
    InputsModule,
    DateInputsModule,
    ButtonsModule,
    DropDownsModule,
    IndicatorsModule,
    GridModule,
    LayoutModule
  ]
})
export class SummaryViewModule { }
