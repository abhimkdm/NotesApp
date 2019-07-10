import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[noteHighlight]'
})
export class HighlightDirective {
  
  constructor(private el: ElementRef) { 
    console.log("Hight Light");
    console.log(el.nativeElement);
    el.nativeElement.style.color="green";
  }

  @HostListener('mouseenter') onmouseenter() {
    this.changebgcolor("yellow");
  }

  @HostListener('mouseleave') onmouseleave() {
    this.changebgcolor(null);
  }

  changebgcolor(color : string) {
    this.el.nativeElement.style.backgroundColor=color;
  }
}
