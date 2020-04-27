import { Component, OnInit } from "@angular/core";
import { NotesService } from "../services/notes.service";
import { Inotes } from "../models/Inotes.interface";
import { notes } from "../models/notes.model";

@Component({
  selector: "note-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"],
})
export class NotesComponent implements OnInit {
  public notesList: Inotes[];
  public notes: notes = new notes();
  public searchTitle: string;
  constructor(private ns: NotesService) {}

  ngOnInit() {
    this.ns.getNotes().subscribe((data) => this.bind(data));
  }

  bind(data: Inotes[]) {
    this.notesList = data;
  }

  addNotes(data: Inotes) {
    data.ratings = parseInt(data.ratings.toString());
    data.tagId = parseInt(data.tagId.toString());
    this.ns.postNotes(data).subscribe((data) => console.log(data));
  }

  logDetails(control: any) {
    console.log(control);
  }
}
