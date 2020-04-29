import { Component, OnInit, ViewChild } from "@angular/core";
import { NotesService } from "../services/notes.service";
import { Inotes } from "../models/Inotes.interface";
import { notes } from "../models/notes.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "note-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"],
})
export class NotesComponent implements OnInit {
  public notesList: Inotes[];
  public notes: notes = new notes();
  public searchTitle: string;
  public idBackup: number = 0;

  constructor(private ns: NotesService, private toastrService: ToastrService) {}

  ngOnInit() {
    this.ns.getNotes().subscribe((data) => this.bind(data));
  }

  bind(data: Inotes[]) {
    this.notesList = data;
  }

  addNotes(data: Inotes) {
    data.ratings = parseInt(data.ratings.toString());
    data.tagId = parseInt(data.tagId.toString());
    this.ns.postNotes(data).subscribe((data) => this.notesRefresh(data));
  }

  notesRefresh(data: Inotes) {
    this.toastrService.success("New Notes Has Been Added.", "Success");
    this.notesList.push(data);
  }

  deleteNotes(id: number) {
    this.idBackup = id == 0 ? this.idBackup : id;
    if (id == 0) {
      this.ns
        .deleteNotes(this.idBackup)
        .subscribe((data) => this.refreshAfterDelete());
    }
  }

  refreshAfterDelete() {
    this.notesList = this.notesList.filter((d) => d.id != this.idBackup);
    this.toastrService.warning("Notes Has Been Deleted.", "Success");
  }

  logDetails(control: any) {
    console.log(control);
  }
}
