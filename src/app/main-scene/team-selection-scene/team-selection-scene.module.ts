import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeamSelectionSceneComponent} from './team-selection-scene.component';
import {MdButtonModule, MdGridListModule} from '@angular/material';
import {PipesModule} from "../../../shared/pipes/pipes.module";
import {FightService} from "../../../shared/services/fight/fight.service";
import {ModeService} from "../../../shared/services/mode/mode.service";

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    PipesModule,
    MdButtonModule,
  ],
  declarations: [
    TeamSelectionSceneComponent,
  ],
  exports: [
    TeamSelectionSceneComponent,
  ],
  providers: [
    FightService,
    ModeService,
  ]
})
export class TeamSelectionSceneModule { }
