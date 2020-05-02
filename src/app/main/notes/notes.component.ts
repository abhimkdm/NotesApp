import { Component, OnInit } from "@angular/core";
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
  public editnotes: notes = new notes();
  //ToDo 05: Add Properties to manage Edit/Add notes data.

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

  notesRefreshUpdate(data: Inotes) {
    this.toastrService.success("Notes Has Been Updated.", "Success");

    this.notesList.forEach((element, index) => {
      if (element.id === data.id) {
        this.notesList[index] = data;
      }
    });
    //ToDo 02: Filter data based on id.
    //ToDo 03: Update the notesList.
    //ToDo 04: Make One UI Referesh Method.
  }

  notesRefresh(data: Inotes) {
    this.toastrService.success("New Notes Has Been Added.", "Success");
    this.notesList.push(data);
    this.clearForm();
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

  clearForm() {
    this.notes = new notes();
  }

  getNote(id: any) {
    //ToDo 01 : Based on id filter the 'notesList' get the note bind to  this.editnotes.
    this.ns.getNote(id).subscribe((data) => this.refreshAfterGet(data));
  }

  refreshAfterGet(data: Inotes) {
    this.editnotes = data;
  }

  updateNotes(data: Inotes) {
    data.ratings = parseInt(data.ratings.toString());
    data.tagId = parseInt(data.tagId.toString());
    this.ns.putNotes(data).subscribe((data) => this.notesRefreshUpdate(data));
  }
}
