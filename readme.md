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

[Updated Angular app code from Angular 6 to Angular 7](./_docs/TSA_Angular6to7.md)

## Todo Web API

[Setting up the "To Do" Web API](./_docs/TSA_TodoWebApi.md)

## Registering App with Azure AD

[Steps to register with Azure AD](./_docs/TSA_AzureAppRegistration.md)

## Resources

See the following pages for additional resources

[Azure Active Directory Resources](./_docs/AzureADResources.md)

## Dev Notes

[Developer Notes](./_docs/TSA_DevNotes.md)
