import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule} from '@angular/material';
import {ModeService} from '../../shared/services/mode/mode.service';
import {MainSceneComponent} from './main-scene.component';
import {FightSceneModule} from './fight-scene/fight-scene.module';
import {TeamSelectionSceneModule} from "./team-selection-scene/team-selection-scene.module";

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    FightSceneModule,
    TeamSelectionSceneModule,
  ],
  declarations: [
    MainSceneComponent,
  ],
  exports: [
    MainSceneComponent
  ],
  providers: [
    ModeService,
  ],
})
export class MainSceneModule { }
