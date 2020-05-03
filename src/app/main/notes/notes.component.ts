import { Component, OnInit } from "@angular/core";
import { NotesService } from "../services/notes.service";
import { Inotes } from "../models/Inotes.interface";
import { notes } from "../models/notes.model";
import { ToastrService } from "ngx-toastr";
import { element } from "@angular/core/src/render3/instructions";

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
  public add: string = "ADD";
  public update: string = "UPDATE";
  public delete: string = "DELETE";
  public isUpdate: boolean = false;

  constructor(private ns: NotesService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.ns.getNotes().subscribe((data) => this.bind(data));
  }

  bind(data: Inotes[]) {
    this.notesList = data;
  }

  /**
       * Add new notes
       * @param data
       */
  addNotes(data: Inotes) {
    data.ratings = parseInt(data.ratings.toString());
    data.tagId = parseInt(data.tagId.toString());
    this.ns.postNotes(data).subscribe((data) => this.notesRefresh(data, "ADD"));
  }

  /**
   * Update existing notes
   * @param data
   */
  updateNotes(data: Inotes) {
    data.ratings = parseInt(data.ratings.toString());
    data.tagId = parseInt(data.tagId.toString());
    this.ns.putNotes(data).subscribe((data) => this.notesRefresh(data, "UPDATE"));
  }

  /**
   * Delete notes
   * @param id
   */
  deleteNotes(id: number) {
    this.idBackup = id == 0 ? this.idBackup : id;
    if (id == 0) {
      this.ns
        .deleteNotes(this.idBackup)
        .subscribe((data) => this.notesRefresh(data, "DELETE"));
    }
  }

  /**
   * Get note based on selected id
   * @param id
   */
  getNote(id: any) {
    this.notesList.filter(item => {
      if (item.id == id)
        this.notes = item;
    });
    this.isUpdate = true;
  }

  /**
   * Refresh note list after CRUD operations.
   * @param data
   * @param operation
   */
  notesRefresh(data: Inotes, operation: string) {
    if (operation == this.add) {
      this.toastrService.success("New Notes Has Been Added.", "Success");
      this.notesList.push(data);
      this.clearForm();
    } else if (operation == this.update) {
      this.toastrService.success("Notes Has Been Updated.", "Success");
      this.notesList[this.notesList.findIndex(item => item.id == data.id)] = data
      this.clearForm();
    } else {
      this.toastrService.warning("Notes Has Been Deleted.", "Success");
      this.notesList = this.notesList.filter((d) => d.id != this.idBackup);
    }
  }

  logDetails(control: any) {
    console.log(control);
  }

  /**
   * Clears form after CRUD operations
   */
  clearForm() {
    this.notes = new notes();
    this.isUpdate = false;
  }

}
