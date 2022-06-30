import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { CollegeDetailsComponent } from './components/college-details/college-details.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';

const routes: Routes = [
  {path: "" , redirectTo:"home",pathMatch: "full"},
  {path: "home" , component: HomeComponent },
  {path: "filters" , component: FiltersComponent },
  {path: "sidebar" , component: SidebarComponent},
  {path: "login", component:LoginComponent},
  {path: "college-details", component:CollegeDetailsComponent},
  {path: "admin-home", component:AdminhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
