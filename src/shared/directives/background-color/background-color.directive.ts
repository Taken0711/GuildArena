import {Directive, ElementRef, Input} from '@angular/core';
import {CharacterState} from "../../constants/character-state";

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  @Input()
  public state: CharacterState;

  constructor(private el: ElementRef) { }


}
