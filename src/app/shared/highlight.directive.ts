import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor : string = "transparent";
  isHighlited = false;
  @HostListener('click') toggleHighlight () {
    if(!this.isHighlited) {
      this.backgroundColor = 'yellow';
      this.isHighlited = true;
    }
    else {
      this.backgroundColor = 'transparent';
      this.isHighlited = false;
    }

  }
  constructor() { }

}
