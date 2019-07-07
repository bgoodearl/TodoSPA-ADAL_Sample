import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { AuthCallbackComponent } from "./shared/auth/auth-callback.component";
import { CounterComponent } from './counter/counter.component';
import { ErrorComponent } from "./shared/error.component";
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TodoListComponent } from "./todo-list/todo-list.component";

import { AdalService } from "adal-angular4";
import { TodoListService } from "./todo-list/todo-list.service";
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent,
    CounterComponent,
    ErrorComponent,
    FetchDataComponent,
    HomeComponent,
    NavMenuComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [AdalService, TodoListService,
    {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  static VER: string = "1.01";
  constructor() {
    console.log("AppModule constructor v=" + AppModule.VER);
  }
}
