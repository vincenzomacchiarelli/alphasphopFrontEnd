import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorChange]',
  standalone: true
})
export class ColorChangeDirective implements OnInit {

  @Input() backgroundColor: string = "transparent";
  @Input() textColor: string = "red";
  @HostBinding('style.backgroundColor') bgColor: string = this.backgroundColor;
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.bgColor = 'darkorange';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.bgColor = this.backgroundColor;
  }

  constructor(private el: ElementRef , private renderer: Renderer2) { }

  ngOnInit() {
    this.applyStyles()
  }

  applyStyles() {
   // this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);
    this.bgColor = this.backgroundColor ;
    this.renderer.setStyle(this.el.nativeElement, 'color', this.textColor);
  }

}
