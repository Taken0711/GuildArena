import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FightSceneComponent} from './fight-scene.component';
import {
  MdCardModule, MdGridListModule, MdListModule, MdProgressBarModule,
  MdProgressSpinnerModule, MdSnackBar, MdSnackBarModule
} from '@angular/material';
import { TeamListComponent } from './team-list/team-list.component';
import { FightCharactCardComponent } from './team-list/fight-charact-card/fight-charact-card.component';
import {FightService} from '../../../shared/services/fight/fight.service';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    MdListModule,
    MdCardModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
  ],
  declarations: [
    FightSceneComponent,
    TeamListComponent,
    FightCharactCardComponent,
  ],
  exports: [
    FightSceneComponent
  ],
  providers: [
    FightService,
    MdSnackBar,
  ]
})
export class FightSceneModule { }
