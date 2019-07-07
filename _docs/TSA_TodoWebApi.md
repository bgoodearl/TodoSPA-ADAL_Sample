# ASP.Net Core To Do Web API

After looking at a number of Todo application samples, the [Tutorial: Create a web API with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-2.2&tabs=visual-studio)
looked to be the best to use.

Copied files from the [Angular 7 Web App with .NET Core Web API and AAD Auth with MSAL](https://github.com/bgoodearl/TodoSPASample) 
which were copied from [AspNetCore.Docs samples - 2.2 TodoApi](https://github.com/aspnet/AspNetCore.Docs/tree/master/aspnetcore/tutorials/first-web-api/samples/2.2/TodoApi)

```txt
Controllers\TodoController.cs

Models\TodoContent.cs
TodoItem.cs
```
Changed namespace from `TodoApi` to `TodoSPA`.

Added the following in Startup.cs:

```cs
using Microsoft.EntityFrameworkCore;
//...
using TodoSPA.Models;
```
and
```cs
    services.AddDbContext<TodoContext>(opt =>
        opt.UseInMemoryDatabase("TodoList"));
```

### First API test
Compiled app and tried API url: `https://localhost:44397/api/todo`.

Got:
```txt
[{"id":1,"creationTime":"2019-07-04T17:22:19.7934869-04:00","name":"Item1","isComplete":false,"owner":"unknown"}]
```