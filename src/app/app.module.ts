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
import { HomeComponent } from './components/home/home.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UniversityComponent } from './components/university/university.component';
import { LoginComponent } from './components/login/login.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { StoreModule, StoreRootModule } from '@ngrx/store';
import { collegeReducer } from './store/colleges.reducer';
import { CollegeComponent } from './components/college/college.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { CucollegeComponent } from './admin/cucollege/cucollege.component';
import { CuuniversityComponent } from './admin/cuuniversity/cuuniversity.component';
import { CustreamComponent } from './admin/custream/custream.component';
import { CucourseComponent } from './admin/cucourse/cucourse.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FiltersComponent,
    SidebarComponent,
    UniversityComponent,
    LoginComponent,
    CollegeComponent,
    LoginFormComponent,
    CucollegeComponent,
    CuuniversityComponent,
    CustreamComponent,
    CucourseComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    HotToastModule.forRoot(),
    StoreModule.forRoot({collegeEntries: collegeReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
