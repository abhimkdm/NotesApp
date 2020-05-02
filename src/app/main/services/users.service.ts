import { Injectable } from '@angular/core';
import { loginmodel } from "../models/login.model";
import { HttpClient } from "@angular/common/http";
import { Observable, interval } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl : string = 'http://localhost:3000/users';

  constructor(private _http : HttpClient) { }

  get() : Observable<loginmodel[]> {
   return this._http.get<loginmodel[]>(this.baseUrl);
  }


}
