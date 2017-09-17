import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {ModeService} from '../../shared/services/mode/mode.service';
import {MainSceneComponent} from './main-scene.component';
import { FightSceneComponent } from './fight-scene/fight-scene.component';
import {FightSceneModule} from "./fight-scene/fight-scene.module";

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    FightSceneModule
  ],
  declarations: [
    MainSceneComponent
  ],
  exports: [
    MainSceneComponent
  ],
  providers: [
    ModeService
  ]
})
export class MainSceneModule { }
