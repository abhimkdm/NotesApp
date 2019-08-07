import { Injectable } from "@angular/core";
import { Itag } from "../models/Itag.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TagsService {

    private baseUrl : string = 'http://localhost:3000/tags';

    constructor(private _http : HttpClient) { }

    get() : Observable<Itag[]> {
     return this._http.get<Itag[]>(this.baseUrl);
    }
}