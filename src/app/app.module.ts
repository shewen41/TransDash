import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { DataTablesModule } from 'angular-datatables';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaymenttableComponent } from './home/paymenttable/paymenttable.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { DashboardContentComponent } from './home/dashboard-content/dashboard-content.component';
import { SharedserviceService } from './sharedservice.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymenttableComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardContentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    DataTablesModule,
    MatSortModule,
    MatSliderModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  providers: [SharedserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
