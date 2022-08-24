import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const drawerRoutes = [
  {
    path: 'purchaseOrders',
    text: "Purchase Orders",
    icon: "k-i-file-txt k-icon-md",
    loadChildren: () =>
      import('./modules/views/detail-view/detail-view.module').then(
        (m) => m.DetailViewModule
      ),
  },
  {
    path: 'styleCustomerOrders',
    text: "Style Customer Orders",
    icon: "k-i-group",
    loadChildren: () =>
      import('./modules/views/summary-view/summary-view.module').then(
        (m) => m.SummaryViewModule
      ),
  },
 
  // {
  //   path: 'error500',
  //   text: "Detail",
  //   icon: "k-i-group",
  //   loadChildren: () =>
  //     import('./core/modules/error-s500/error-s500.module').then(
  //       (m) => m.ErrorS500Module
  //     ),
  // },
  {
    path: 'cnlTypeData',
    text: "Cnl Type Data",
    icon: "k-i-group",
    loadChildren: () =>
      import('./modules/plm/plm.module').then(
        (m) => m.PlmModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(drawerRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
