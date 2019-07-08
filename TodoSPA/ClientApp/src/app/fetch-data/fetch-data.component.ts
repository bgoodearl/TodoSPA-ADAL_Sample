import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AUTH_CONFIG } from "../shared/auth/authconfig";

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, ) {
    let apiUrl: string = AUTH_CONFIG.apiRoot + "/api/SampleData/WeatherForecasts";
    //console.log("apiUrl=[" + apiUrl + "]");
    http.get<WeatherForecast[]>(apiUrl).subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
