import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'note-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public text : string = "Angular";

  constructor() { }

  ngOnInit() {
  }

}
