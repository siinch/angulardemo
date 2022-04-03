import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

// only necessary for development/testing
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';

import { AppComponent } from './components/app/app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // only for development/testing
    HttpClientInMemoryWebApiModule
    .forRoot(InMemoryDataService, { dataEncapsulation: false } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
