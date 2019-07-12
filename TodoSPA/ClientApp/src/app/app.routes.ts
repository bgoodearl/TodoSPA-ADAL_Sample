import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ErrorComponent } from "./shared/error.component";
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { AdalGuard } from 'adal-angular4';
import { UserInfoComponent } from './shared/userinfo.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AdalGuard] },
  { path: 'todo-list', component: TodoListComponent, canActivate: [AdalGuard] },
  { path: 'user-info', component: UserInfoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];
