import {Component, Input, OnInit} from '@angular/core';
import {FightModel} from '../../../shared/models/FightModel';
import {FightService} from "../../../shared/services/fight/fight.service";
import {MdSnackBar} from "@angular/material";


@Component({
  selector: 'app-fight-scene',
  templateUrl: './fight-scene.component.html',
  styleUrls: ['./fight-scene.component.css']
})
export class FightSceneComponent implements OnInit {

  @Input() public currentFight: FightModel;

  constructor(private fightService: FightService, private snackBar: MdSnackBar) { }

  ngOnInit() {
    // --- Events ---
    // Someone's turn
    this.fightService.currentPlayingCharacter$.subscribe(character => {
      this.snackBar.open(`${character.name}'s turn !`, undefined, {
        'duration': 1996
      });
    });


    this.startFight();
  }


  private startFight() {
    this.fightService.updateCurrentPlayingCharacter(this.currentFight.playATurn());

  }

}
