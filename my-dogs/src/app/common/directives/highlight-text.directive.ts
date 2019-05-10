import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {
  @Input('appHighlightText') cursor: string;
  @Input('color') color: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setCursor(this.cursor || 'initial');
    this.setTextColor(this.color || 'black');
  }

  @HostListener('mouseout') onMouseOut() {
    this.setCursor('initial');
    this.setTextColor('black');
  }

  private setCursor(cursor: string) {
    this.el.nativeElement.style.cursor = cursor;
  }

  private setTextColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
