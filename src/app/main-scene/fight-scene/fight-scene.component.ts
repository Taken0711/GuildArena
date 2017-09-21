import {Component, Input, OnInit} from '@angular/core';
import {FightModel} from '../../../shared/models/FightModel';
import {FightService} from "../../../shared/services/fight/fight.service";
import {MdDialog, MdSnackBar} from "@angular/material";
import {WinnerDialogComponent} from "./winner-dialog/winner-dialog.component";


@Component({
  selector: 'app-fight-scene',
  templateUrl: './fight-scene.component.html',
  styleUrls: ['./fight-scene.component.css']
})
export class FightSceneComponent implements OnInit {

  @Input() public currentFight: FightModel;

  constructor(private fightService: FightService, private snackBar: MdSnackBar, private dialog: MdDialog) { }

  ngOnInit() {
    // --- Events ---
    // End of fight
    this.fightService.currentFightWinner$.subscribe(winner => {
      this.dialog.open(WinnerDialogComponent, {
        width: '250px',
        data: { 'winner': winner}
      });
    });
    // Someone's turn
    this.fightService.currentAttackingCharacter$.subscribe(character => {
      this.snackBar.open(`${character.name}'s turn !`, undefined, {
        'duration': 1996
      });
    });

    this.fightService.updateCurrentFight(this.currentFight);
    this.fightService.startFight();
  }

}
