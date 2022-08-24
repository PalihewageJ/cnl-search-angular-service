import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { TooltipModule } from "@progress/kendo-angular-tooltip";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphqlModule } from './core/modules/graphql/graphql.module';

import { HeaderModule } from './modules/shared/header/header.module';
import { FooterModule } from './modules/shared/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    AppRoutingModule, 
    HttpClientModule, 
    GraphqlModule, 
    LayoutModule, 
    ButtonsModule,
    IndicatorsModule,
    TooltipModule,
    InputsModule,
    NavigationModule,
    FormsModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
