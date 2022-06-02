import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { HomeComponent } from './components/home/home.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UniversityComponent } from './components/university/university.component';
import { LoginComponent } from './components/login/login.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { collegeReducer } from './store/colleges.reducer';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar2Component,
    HomeComponent,
    FiltersComponent,
    SidebarComponent,
    UniversityComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HotToastModule.forRoot(),
    StoreModule.forRoot({collegeEntries: collegeReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
