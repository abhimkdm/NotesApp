import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inotes } from "../models/Inotes.interface";

@Injectable({
  providedIn: "root",
})
export class NotesService {
  baseUrl: string = "http://localhost:3000/notes";

  constructor(private _http: HttpClient) {}

  getNotes(): Observable<Inotes[]> {
    return this._http.get<Inotes[]>(this.baseUrl);
  }

  postNotes(notes: Inotes): Observable<Inotes> {
    return this._http.post<Inotes>(this.baseUrl, notes);
  }

  deleteNotes(id: number): Observable<any> {
    return this._http.delete(this.baseUrl + "/" + id);
  }

  putNotes(notes: Inotes): Observable<Inotes> {
    return this._http.put<Inotes>(this.baseUrl + "/" + notes.id, notes);
  }
}
