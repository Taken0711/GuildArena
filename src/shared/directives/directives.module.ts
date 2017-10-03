import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpellIconDirective} from "./spell-icon/spell-icon.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpellIconDirective,
  ],
  exports: [
    SpellIconDirective,
  ]
})
export class DirectivesModule { }
