import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "note-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"],
})
export class StarComponent implements OnChanges {
  @Input() ratings: number;
  colorStar: string = "fa fa-star text-info";
  blackStar: string = "fa fa-star";
  blackStars: number[];
  colorStars: number[];

  ngOnChanges(): void {
    this.colorStars = Array(this.ratings).fill(1);
    this.blackStars = Array(5 - this.ratings).fill(0);

    console.log(this.ratings);
  }
}
