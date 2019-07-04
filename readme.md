# Angular 7 Web App with .NET Core Web API and AAD Auth with ADAL

This repo contains a sample application created with Visual Studio 2019 using .NET Core 2.2 and Angular 7.

Essentially replicates .NET Core Web API and Angular app from 
[https://github.com/bgoodearl/TodoSPASample#angular-7-web-app-with-net-core-web-api-and-aad-auth-with-msal](https://github.com/bgoodearl/TodoSPASample) using ADAL rather than MSAL.

## Initial Setup

**IMPORTANT**

If you don't already have it, I highly recommend Mads Kristensen's [Open Command Line Visual Studio Extension](http://vsixgallery.com/extension/f4ab1e64-5d35-4f06-bad9-bf414f4b3bbb/), which I use to open a command line for all of the work done in building this sample.

## Environment

Quick information on environment.

### Node/NPM

```cmd
node --version
v10.16.0

npm --version
6.9.0
```

### Angular 7

Note: run `npm install` from command prompt before running `ng --version`

### .NET

## Take 1 - Starting from VS2019 GUI

## Update Angular 6 to 7

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
