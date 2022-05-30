import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [];

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
