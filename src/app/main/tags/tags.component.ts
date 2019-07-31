import { Component, OnInit } from '@angular/core';
import { TagsService } from '../services/tags.service';
import { Itag } from '../models/Itag.interface';

@Component({
  selector: 'note-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  public tagList : Itag[];

  constructor(private _tagsService : TagsService) { }

  ngOnInit() {
   this.tagList = this._tagsService.get();
   //console.table(this.tagList);
  }

}
