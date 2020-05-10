import { Component, OnInit } from "@angular/core";
import { TagsService } from "../services/tags.service";
import { Itag } from "../models/Itag.interface";
import { Router } from "@angular/router";

@Component({
  selector: "note-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.css"],
})
export class TagsComponent implements OnInit {
  public tagList: Itag[];

  constructor(private _tagsService: TagsService, private router: Router) {}

  ngOnInit() {
    this._tagsService.get().subscribe((data) => this.initData(data));
    //this._tagsService.asyncData().subscribe(data => console.log(data));
  }

  initData(data: Itag[]) {
    this.tagList = data;
  }

  goTo(tagId: number) {
    this.router.navigateByUrl("/dashboard/" + tagId + "/notes");
  }
}
