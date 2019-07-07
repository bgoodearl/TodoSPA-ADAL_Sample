import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-auth-callback',
  template: `<h1>auth-callback</h1>
               <p>auth callback</p>
              `
})
export class AuthCallbackComponent implements OnInit {

  constructor(private router: Router, private adal: AdalService, private _zone: NgZone) {
    console.log("AuthCallbackComponent");
  }

  ngOnInit() {
    console.log("AuthCallbackComponent OnInit");
    this.adal.handleWindowCallback();
    console.log("AuthCallbackComponent OnInit - after callback");
    //setTimeout(() = {
    //  this._zone.run(
    //    () = this.router.navigate(['/'])
    //  );
    //}, 200);
  }

}
