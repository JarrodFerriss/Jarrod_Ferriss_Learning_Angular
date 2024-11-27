import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input('appHighlightOnFocus') focusColor: string = 'lightblue';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    this.changeHighlightColor(this.focusColor);
  }

  @HostListener('blur') onBlur() {
    this.changeHighlightColor(null);
  }

  private changeHighlightColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
