import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  // end point URLs
  private BAKERY_LIST = 'assets/bakery.json';
  private MEGAPORT_LOCATIONS = 'https://api.megaport.com/v2/locations';
  public NO_RECORD_FOUND = 'No record found! Please try again after some time.'

  // Megaport location headers
  getLocationTableHeaders() {
    const data = [
      { name: 'Id' },
      { name: 'Country' },
      { name: 'Metro' },
      { name: 'Name' }
    ]
    return data;
  }

  constructor(private http: HttpClient) { }


  //  get bakery list 
  public getBakeryList(): Observable<any> {
    return this.http.get(this.BAKERY_LIST);
  }

  // get list of Megaport enabled locations
  public getPortList(): Observable<any> {
    return this.http.get(this.MEGAPORT_LOCATIONS);
  }

}
