import { Component, OnInit, Input, OnChanges, OnDestroy } from "@angular/core";

@Component({
  selector: "note-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"],
})
export class StarComponent implements OnChanges, OnInit, OnDestroy {
  @Input() ratings: number;
  colorStar: string = "fa fa-star text-info";
  blackStar: string = "fa fa-star";
  blackStars: number[];
  colorStars: number[];

  ngOnChanges(): void {
    this.colorStars = Array(this.ratings).fill(1);
    this.blackStars = Array(5 - this.ratings).fill(0);
    //console.log("Star ngOnChanges Called");
    //console.log(this.ratings);
  }

  ngOnInit(): void {
    //console.log("Star ngOnInit Called");
  }

  ngOnDestroy(): void {
    //console.log("Star ngOnDestroy Called");
  }
}
