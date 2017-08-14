import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';


import { AngularFireModule  } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase_config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
