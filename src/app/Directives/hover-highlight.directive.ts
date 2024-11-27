import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input('appHoverHighlight') highlightColor: string = 'yellow'; // Default color

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor(null);
  }

  private changeBackgroundColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}

