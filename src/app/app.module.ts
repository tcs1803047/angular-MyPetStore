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
import { LoginmenuComponent } from './loginmenu/loginmenu.component';
import { StoryComponent } from './story/story.component';
import { BookComponent } from './book/book.component';
import { GrosseryComponent } from './grossery/grossery.component';
import { MatButtonModule } from '@angular/material';
import { MessageListComponent } from './message-list/message-list.component';
//
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    //ReactiveFormsModule,
    //
    RouterModule.forRoot([
      { path: 'story', component: MessageListComponent },
      { path: 'book', component: BookComponent },      
      { path: 'grossery', component: GrosseryComponent },      
      { path: 'login', component: LoginComponent },
    ])

    ],
  declarations: [
    AppComponent,
    HelloComponent, 
    TopBarComponent,
    LoginComponent,
    LoginmenuComponent,
    StoryComponent,
    BookComponent,
    GrosseryComponent,
    MessageListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
