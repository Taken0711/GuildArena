import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FightSceneComponent} from './fight-scene.component';
import {
  MdCardModule, MdDialog, MdDialogModule, MdGridListModule, MdListModule, MdProgressBarModule,
  MdProgressSpinnerModule, MdSnackBar, MdSnackBarModule
} from '@angular/material';
import { TeamListComponent } from './team-list/team-list.component';
import { FightCharactCardComponent } from './team-list/fight-charact-card/fight-charact-card.component';
import {FightService} from '../../../shared/services/fight/fight.service';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    MdListModule,
    MdCardModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
    MdDialogModule,
  ],
  declarations: [
    FightSceneComponent,
    TeamListComponent,
    FightCharactCardComponent,
    WinnerDialogComponent,
  ],
  exports: [
    FightSceneComponent
  ],
  providers: [
    FightService,
    MdSnackBar,
    MdDialog,
  ],
  entryComponents: [WinnerDialogComponent]
})
export class FightSceneModule { }
