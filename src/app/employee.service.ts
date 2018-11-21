import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url :string= "/assets/data/employees.json";
  constructor(private http : HttpClient) { }
  getEmployees():Observable<IEmployee[]> {
    // return [
    //   { "id": 1, "name": "Rahat", "city": "Dhaka" },
    //   { "id": 2, "name": "Nur", "city": "Khulna" },
    //   { "id": 3, "name": "Onik", "city": "Sylhet" },
    //   { "id": 4, "name": "Siam", "city": "Rajshahi" }
    // ];
    //As we don't have any database right now let's assume we are 
    //fetching data from a file named employees.json

    return this.http.get<IEmployee[]>(this._url);

  }

}
