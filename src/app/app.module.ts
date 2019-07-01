import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListofinfoComponent } from './listofinfo/listofinfo.component';
import { MainService } from '../app/main.service';

const ROUTES : Routes =[
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterationComponent},
  {path:'getalldetails',component:ListofinfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    ListofinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
   providers: [
     {provide: APP_BASE_HREF, useValue : '/' },
     MainService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
