import { Component } from '@angular/core';

@Component({
  selector: 'note-demo',
  template: `
  <h1> Demo Component (Parent)</h1>
  <hr>
  <h1>My Page Title Is  {{PageTitle}}</h1>
  {{sum()}}
  
  <p>
    Our Demo Component
  </p>

  <hr>
  <h2> Property Binding</h2>
  <img [src]="ImgUrl" /> <br> <br>
  My Color Is {{Color}}
  <label [style.color]='Color'>Hello</label>

  <br> <br>

  <button (click)='ToggleColor()'>Toggle Color</button>

  <br> <br>

  <input (keyup)='onkey($event)' type="text">
  `,
  styles: [
    `h1 { color : black;} 
    p {
    color: green;
    font-size: 50px;
    }`
  ]
})

export class DemoComponent {

  public PageTitle: string = "Welcome To Demo Component";
  public ImgUrl: string ="favicon.ico";
  public Color: string = "green";

  constructor() { }

  sum = function(){
    return 10 + 20;
  }

  ToggleColor = function() {

    this.Color = this.Color =="green"? 'brown' : 'green';
  }

  onkey = function(e : any) {
    this.Color=e.target.value;
    console.log(e.target.value);
  }

}
