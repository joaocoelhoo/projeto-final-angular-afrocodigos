import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee-list/employee-list.modules';
import { EmployeeFormModule } from './employee/employee-form/employee-form.module';
import { EmployeeEditModule } from './employee/employee-edit/employee-edit.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    EmployeeFormModule,
    EmployeeEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
