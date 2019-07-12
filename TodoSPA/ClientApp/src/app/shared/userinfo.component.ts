import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'user-info',
  template: `<h1>User Info</h1>
               <p>{{userInfo}}</p>
              `
})

export class UserInfoComponent {
  static VER: string = "1.01";

  public userInfo: string = null;

  constructor(private adal: AdalService) {
    console.log("UserInfoComponent constructor v=" + UserInfoComponent.VER);
  }

  ngOnInit() {
    console.log("UserInfoComponent OnInit");
    this.userInfo = JSON.stringify(this.adal.userInfo);
    //console.log(this.adal.userInfo);
    console.log("UserInfoComponent OnInit 2");
  }
}
