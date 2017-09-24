import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterSelectionComponent} from "./character-selection/character-selection.component";
import {AvailableCharacterComponent} from "./available-character/available-character.component";
import {TeamSelectionSceneComponent} from "./team-selection-scene.component";
import {MdGridListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule
  ],
  declarations: [
    TeamSelectionSceneComponent,
    AvailableCharacterComponent,
    CharacterSelectionComponent,
  ],
  exports: [
    TeamSelectionSceneComponent,
  ]
})
export class TeamSelectionSceneModule { }
