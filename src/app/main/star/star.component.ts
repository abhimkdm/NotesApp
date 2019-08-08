import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'note-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
 
  @Input() ratings : number;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.ratings);
  }

}
