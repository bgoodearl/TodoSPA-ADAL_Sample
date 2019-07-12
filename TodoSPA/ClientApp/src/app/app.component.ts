import { Component, OnInit } from '@angular/core';
import { AdalService } from "adal-angular4";
import { AUTH_CONFIG } from "./shared/auth/authconfig";
//import { adal } from 'adal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  static VER: string = "1.19";

  title = 'app';

  constructor(private adal: AdalService) {
    console.log("AppComponent constructor v=" + AppComponent.VER + ", authConfig.type=" + AUTH_CONFIG.authConfigType);
  }

  ngOnInit() {
    console.log("AppComponent OnInit v=" + AppComponent.VER);
    let apiUrlRoot: string = AUTH_CONFIG.apiRoot + "/api/";
    //console.log("apiUrlRoot: [" + apiUrlRoot + "]");
    //console.log("apiId: [" + AUTH_CONFIG.apiId + "]");
    //console.log("window.location=[" + window.location + "]");
    //console.log("window.location.origin=[" + window.location.origin + "]");
    //console.log("clientId=[" + AUTH_CONFIG.clientId + "]");

    //Set up ADAL logging
    let myWindow: any = window;
    myWindow.Logging = {
      level: 3, //levels: 1, 2, 3 (3=verbose)
      log: function (message) {
        console.log(message)
      },
      piiLoggingEnabled: false
    };

    let endpoints: any = {};
    endpoints[apiUrlRoot] = AUTH_CONFIG.apiId;

    let adalConfig: any = { //adal.Config
      clientId: AUTH_CONFIG.clientId,
      redirectUri: window.location.origin, // AUTH_CONFIG.appRedirectUri,
      tenant: AUTH_CONFIG.tenantId,
      endpoints: endpoints,
      navigateToLoginRequestUrl: false,
      popUp: false,
      cacheLocation: "localStorage"
    };
    //let weatherApiUrl: string = AUTH_CONFIG.apiRoot + "/api/SampleData/WeatherForecasts";
    //console.log(adalConfig);
    //console.log("adalConfig.endpoints:");
    //for (var configEndpoint in adalConfig.endpoints) {
    //  let cfgIdx: number = weatherApiUrl.indexOf(configEndpoint);
    //  console.log("configEndpoint=" + configEndpoint + ", cfgIdx=" + cfgIdx);
    //  console.log(adalConfig.endpoints[configEndpoint]);
    //}
    this.adal.init(adalConfig);
    //var foo: any = this.adal.getResourceForEndpoint(weatherApiUrl);
    //if (foo) {
    //  console.log("getResourceForEndpoint(" + weatherApiUrl + ") returned:");
    //  console.log(foo);
    //} else {
    //  console.log("getResourceForEndpoint(" + weatherApiUrl + ") returned nothing");
    //}
  }
}
