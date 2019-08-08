import { Injectable } from "@angular/core";
import { Itag } from "../models/Itag.interface";
import { HttpClient } from "@angular/common/http";
import { Observable, interval } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TagsService {

    private baseUrl : string = 'http://localhost:3000/tags';

    constructor(private _http : HttpClient) { }

    get() : Observable<Itag[]> {
     return this._http.get<Itag[]>(this.baseUrl);
    }

    asyncData() : Observable<any> {
        const remoteData : Observable<Number> = interval(1000);
        return remoteData;
    }
}