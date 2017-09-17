import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FightSceneComponent} from "./fight-scene.component";
import {
  MdCardModule, MdGridListModule, MdListModule, MdProgressBarModule,
  MdProgressSpinnerModule
} from "@angular/material";
import { TeamListComponent } from './team-list/team-list.component';
import { FightCharactCardComponent } from './team-list/fight-charact-card/fight-charact-card.component';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    MdListModule,
    MdCardModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
  ],
  declarations: [
    FightSceneComponent,
    TeamListComponent,
    FightCharactCardComponent
  ],
  exports: [
    FightSceneComponent
  ]
})
export class FightSceneModule { }
