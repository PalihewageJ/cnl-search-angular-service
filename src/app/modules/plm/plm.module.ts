import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlmComponent } from './plm.component';
import { PlmRoutingModule } from './plm-routing.module';
import { FormsModule } from '@angular/forms';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from "@progress/kendo-angular-layout";


@NgModule({
  declarations: [
    PlmComponent
  ],
  imports: [
    CommonModule,
    PlmRoutingModule,
    FormsModule,

    InputsModule,
    IndicatorsModule,
    GridModule,
    LayoutModule,
    ButtonsModule
  ]
})
export class PlmModule { }
