import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appSpellIcon]'
})
export class SpellIconDirective {

  constructor(private el: ElementRef) { }

  public enableBorder(): void {
    this.el.nativeElement.style.borderStyle = 'solid';
  }

  public disableBorder(): void {
    this.el.nativeElement.style.borderStyle = 'none';
  }
}
