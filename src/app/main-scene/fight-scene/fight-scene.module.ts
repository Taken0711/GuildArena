import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FightSceneComponent} from './fight-scene.component';
import {
  MdButtonModule,
  MdCardModule, MdDialog, MdDialogModule, MdGridListModule, MdListModule, MdProgressBarModule,
  MdProgressSpinnerModule, MdSnackBar, MdSnackBarModule, MdTooltipModule
} from '@angular/material';
import { TeamListComponent } from './team-list/team-list.component';
import { FightCharactCardComponent } from './team-list/fight-charact-card/fight-charact-card.component';
import {FightService} from '../../../shared/services/fight/fight.service';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';
import { FightSpellCardComponent } from './fight-spell-card/fight-spell-card.component';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    MdListModule,
    MdCardModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdButtonModule,
  ],
  declarations: [
    FightSceneComponent,
    TeamListComponent,
    FightCharactCardComponent,
    FightSpellCardComponent,
  ],
  exports: [
    FightSceneComponent
  ],
  providers: [
    FightService,
    MdSnackBar,
    MdDialog,
  ],
})
export class FightSceneModule { }
