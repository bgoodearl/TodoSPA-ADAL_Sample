import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoListService} from "./todo-list.service";
import {TodoList} from "./todoList";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy  {
  static VER: string = "1.01";

  private error = "";
  public loadingMessage = "Loading...";
   todoList: TodoList[];
  public newTodoCaption = "";
  private submitted = false;

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
    console.log("todoList component OnInit v=" + TodoListComponent.VER);

    this.populate();
  }

  public populate() {
    this.todoListService.getItems().subscribe(result => {
      this.todoList = result;
      this.loadingMessage = "";
    }, error => {
        console.log("todoList populate failed");
      this.error = error;
      this.loadingMessage = "";
    });
  }

  add(isValid : boolean) {
    this.submitted = true;
    if(isValid) {
      this.todoListService.postItem({
        'name': this.newTodoCaption,
      }).subscribe( (results) => {
      this.loadingMessage = "";
        this.newTodoCaption = "";
        this.populate();
      }, (err) => {
        this.error = err;
       this.loadingMessage = "";
      })
    }
    else {
    }
  };

  ngOnDestroy() {
    console.log("todoList component OnDestroy");
  }
}
