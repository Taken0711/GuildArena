import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObjNgForPipe} from "./obj-ng-for/obj-ng-for.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ObjNgForPipe,
  ],
  exports: [
    ObjNgForPipe,
  ]
})
export class PipesModule { }
