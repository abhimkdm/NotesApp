import { Component, OnInit, ViewChild } from "@angular/core";
import { NotesService } from "../services/notes.service";
import { Inotes } from "../models/Inotes.interface";
import { notes } from "../models/notes.model";
import { ToastrService } from "ngx-toastr";
import { FormGroup } from '@angular/forms';

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

  @ViewChild('notesForm') formValues; // Added this

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
      this.formValues.resetForm(); // Added this

  //  form.reset();

  }

  notesRefreshUpdate(data: Inotes) {
    this.toastrService.success("Notes Has Been Updated.", "Success");

    this.notesList.forEach((element, index) => {
      if (element.id === data.id) {
        this.notesList[index] = data;
      };
    });
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

  clearForm(form: any) {
    form.reset();
    }

    getNote(id: any) {
      this.ns
      .getNote(id)
      .subscribe((data) => this.refreshAfterGet(data));
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
