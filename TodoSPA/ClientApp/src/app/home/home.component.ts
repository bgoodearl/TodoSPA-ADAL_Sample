import { Component, OnInit } from '@angular/core';
import { AdalService } from 'adal-angular4';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  static VER: string = "1.02";

  constructor(private adal: AdalService) {
    console.log("HomeComponent constructor v=" + HomeComponent.VER);
  }

  ngOnInit() {
    //console.log("HomeComponent OnInit");
    this.adal.handleWindowCallback();
    //console.log("HomeComponent OnInit - after callback");
  }
}
