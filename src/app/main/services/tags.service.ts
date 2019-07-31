import { Injectable } from "@angular/core";
import { Itag } from "../models/Itag.interface";

@Injectable({
    providedIn: 'root'
})

export class TagsService {

    constructor() { }

    get() : Itag[] {
        return [{ 'name': 'Books' }, 
                { 'name': 'Films' }, 
                { 'name': 'Others' }]
        //console.log("Tag Service Is Called");
    }
}