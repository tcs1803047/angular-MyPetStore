import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
//
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
//
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    //ReactiveFormsModule,
    //
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
    ])

    ],
  declarations: [
    AppComponent,
    HelloComponent, 
    TopBarComponent, LoginComponent, MembersComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
