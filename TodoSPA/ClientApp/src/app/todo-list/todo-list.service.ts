import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodoList} from "./todoList";
import { map, catchError } from 'rxjs/operators';
import { AUTH_CONFIG } from "../shared/auth/authconfig";

@Injectable()
export class TodoListService {
  static VER: string = "1.03";

  private apiEndpoint: string = null; //"https://localhost:44358/api/todo";

  constructor(private http: HttpClient) {
    console.log("todoListSvc constructor v=" + TodoListService.VER + " - apiRoot=[" + AUTH_CONFIG.apiRoot + "]");
    this.apiEndpoint = AUTH_CONFIG.apiRoot + "/api/todo";
  }

  getItems(): Observable<TodoList[]> {
    console.log("todoListSvc getItems");
    return this.http.get(this.apiEndpoint)
      .pipe(map((response: TodoList[]) => response
      ),
        catchError(response => (Observable.throw(response))))
  }

  postItem(item: any) {
    return this.http.post(this.apiEndpoint, item, {responseType: 'text'})
      .pipe(map((response) => {
        return response;
      }))
  }

}
