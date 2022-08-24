import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { GridModule } from "@progress/kendo-angular-grid";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";

import { DetailViewRoutingModule } from './detail-view-routing.module';
import { DetailViewComponent } from './detail-view.component';

@NgModule({
  declarations: [DetailViewComponent],
  imports: [CommonModule,
            DetailViewRoutingModule,
            NotificationModule,
            GridModule,
            IndicatorsModule
          ],
})
export class DetailViewModule {}
