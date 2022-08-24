import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import { NavigationModule } from "@progress/kendo-angular-navigation";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { PopupModule } from "@progress/kendo-angular-popup";
import { ButtonsModule } from "@progress/kendo-angular-buttons";



@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    IndicatorsModule,
    LayoutModule,
    PopupModule,
    ButtonsModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
