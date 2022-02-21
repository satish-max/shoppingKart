import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componenet/header/header.component';
import { DashboardComponent } from './componenet/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule } from'./material/material.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent}  from './componenet/navigation/navigation.component'
import { HttpClientModule } from '@angular/common/http';
import { MycartComponent } from './componenet/mycart/mycart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchproductComponent } from './componenet/searchproduct/searchproduct.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NavigationComponent,
    MycartComponent,
    SearchproductComponent,
    LoginComponent,
    OrderComponent,
    SignupComponent,
    ProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule ,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
