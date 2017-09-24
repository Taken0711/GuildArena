import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule} from '@angular/material';
import {ModeService} from '../../shared/services/mode/mode.service';
import {MainSceneComponent} from './main-scene.component';
import {FightSceneModule} from './fight-scene/fight-scene.module';
import { TeamSelectionSceneComponent } from './team-selection-scene/team-selection-scene.component';
import { AvailableCharacterComponent } from './team-selection-scene/available-character/available-character.component';
import { CharacterSelectionComponent } from './team-selection-scene/character-selection/character-selection.component';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    FightSceneModule,
    TeamSelectionSceneComponent,
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
