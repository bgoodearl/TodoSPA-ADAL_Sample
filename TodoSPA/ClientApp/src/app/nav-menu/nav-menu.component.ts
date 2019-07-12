import { Component, OnInit } from '@angular/core';
import { AdalService } from "adal-angular4";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  static VER: string = "1.04";
  isExpanded = false;
  //isLoggedIn = false;

  constructor(private adal: AdalService) {
    console.log("NavMenuComponent constructor v=" + NavMenuComponent.VER);
  }

  collapse() {
    this.isExpanded = false;
  }

  get isLoggedIn(): boolean {
    //console.log("isLoggedIn authenticated=" + this.adal.userInfo.authenticated);
    return this.adal.userInfo.authenticated;
  }

  login(): void {
    console.log("login");
    this.adal.login();
    console.log("login - auth'ed=" + this.adal.userInfo.authenticated);
  }

  logout(): void {
    console.log("logout");
    this.adal.logOut();
    console.log("logout - auth'ed=" + this.adal.userInfo.authenticated);
  }

  ngOnInit() {
    console.log("NavMenuComponent OnInit v=" + NavMenuComponent.VER);
    //this.isLoggedIn = this.adal.userInfo.authenticated;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
