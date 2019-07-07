# Update Angular 6 to 7

### Angular CLI

Check global npm packages:
```cmd
npm list -g --depth 0
```
got
```txt
C:\ProgramData\npm
+-- @angular/cli@7.3.8
+-- auth0-deploy-cli@3.0.1
+-- gulp@3.9.1
+-- http-server@0.11.1
+-- live-server@1.2.0
+-- npm@6.9.0
+-- npm-windows-upgrade@6.0.1
+-- rxjs-tslint@0.1.7
+-- tslint@5.18.0
```

```cmd
ng update
```
got
```txt
    We analyzed your package.json, there are some packages to update:

      Name                                      Version                  Command to update
     ---------------------------------------------------------------------------------------
      @angular/cli                              6.0.8 -> 8.1.0           ng update @angular/cli
      @angular/core                             6.0.5 -> 8.1.0           ng update @angular/core
      @angular/core                             6.1.10 -> 7.2.15         ng update @angular/core
      @nguniversal/aspnetcore-engine            6.0.0 -> 8.1.1           ng update @nguniversal/aspnetcore-engine
      rxjs                                      6.2.1 -> 6.5.2           ng update rxjs


    There might be additional packages that are outdated.
    Or run ng update --all to try to update all at the same time.
```

With Angular CLI v7.3.8 installed globally, and version specified in package.json at ~6.0.0, to update to 7.3.8 for project:
```cmd
ng update @angular/cli@7.3.8
```
Updated `@angular/cli` in `package.json`.

```cmd
ng update @angular/core@7.2.15
```
updated multiple packages in `package.json`.

```cmd
ng update
```
got
```txt
    We analyzed your package.json, there are some packages to update:

      Name                                      Version                  Command to update
     ---------------------------------------------------------------------------------------
      @angular/cli                              7.3.9 -> 8.1.0           ng update @angular/cli
      @angular/core                             7.2.15 -> 8.1.0          ng update @angular/core
      @nguniversal/aspnetcore-engine            6.0.0 -> 8.1.1           ng update @nguniversal/aspnetcore-engine


    There might be additional packages that are outdated.
    Run "ng update --all" to try to update all at the same time.
```

Compiled and ran and app runs successfully.
