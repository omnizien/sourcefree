import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { IProduct } from 'src/shared/models/product';
import { CommonModule } from '@angular/common';
 
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponentComponent } from './form-component/form-component.component';
import { AlertifyService } from './services/alertify.service';
import { MultiFormComponent } from './multi-form/multi-form.component';
 


@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
  
    MultiFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   BrowserAnimationsModule,
   ReactiveFormsModule,
   FormsModule,
   CommonModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
