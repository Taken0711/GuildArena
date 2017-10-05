import {Component, Input, OnInit} from '@angular/core';
import {FightModel} from '../../../shared/models/FightModel';
import {FightService} from "../../../shared/services/fight/fight.service";
import {MdDialog, MdSnackBar} from "@angular/material";
import {WinnerDialogComponent} from "./winner-dialog/winner-dialog.component";
import {CharacterModel} from "../../../shared/models/characters/CharacterModel";
import {SpellModel} from "../../../shared/models/spells/SpellModel";


@Component({
  selector: 'app-fight-scene',
  templateUrl: './fight-scene.component.html',
  styleUrls: ['./fight-scene.component.css']
})
export class FightSceneComponent implements OnInit {

  public currentFight: FightModel;
  public currentAttacking: CharacterModel;
  public selectedSpell: SpellModel;

  constructor(private fightService: FightService, private snackBar: MdSnackBar, private dialog: MdDialog) {
    this.currentFight = this.fightService.getCurrentFight();
  }

  ngOnInit() {
    // --- Events ---
    // End of fight
    this.fightService.currentFightWinner$.subscribe(winner => {
      this.dialog.open(WinnerDialogComponent, {
        width: '450px',
        data: { 'winner': winner}
      });
    });
    // Someone's turn
    this.fightService.currentAttackingCharacter$.subscribe(character => {
      this.currentAttacking = character;
      this.snackBar.open(`${character.name}'s turn !`, undefined, {
        'duration': 1996
      });
    });

    this.fightService.startFight();
  }

  public selectSpell(newSpell: SpellModel): void {
    this.selectedSpell = newSpell;
  }

  public endTurn(): void {
    this.fightService.playATurn();
  }
}
