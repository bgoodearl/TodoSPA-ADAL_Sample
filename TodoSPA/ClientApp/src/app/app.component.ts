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
  static VER: string = "1.01";

  title = 'app';

  constructor(private adal: AdalService) {
    console.log("AppComponent constructor v=" + AppComponent.VER + ", authConfig.type=" + AUTH_CONFIG.authConfigType);
  }

  ngOnInit() {
    console.log("AppComponent OnInit v=" + AppComponent.VER);
    let adalConfig: adal.Config = {
      clientId: AUTH_CONFIG.clientId,
      redirectUri: AUTH_CONFIG.appRedirectUri,
      tenant: AUTH_CONFIG.tenantId
    };
    this.adal.init(adalConfig);
  }
}
