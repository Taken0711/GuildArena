import { Component, OnInit } from '@angular/core';
import {ModeService} from '../../shared/services/mode/mode.service';
import {Mode} from '../../shared/constants/mode';
import {FightModel} from '../../shared/models/FightModel';
import {PlayerModel} from '../../shared/models/PlayerModel';
import {CharacterModel} from "../../shared/models/CharacterModel";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-main-scene',
  templateUrl: './main-scene.component.html',
  styleUrls: ['./main-scene.component.css']
})
export class MainSceneComponent implements OnInit {

  mode = Mode;

  public currentMode: Mode;
  public currentFight: FightModel;

  constructor(private modeService: ModeService, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.modeService.currentMode$.subscribe((newMode) => this.currentMode = newMode);
    console.log(this.currentMode);
    console.log(this.modeService.currentMode$.getValue());
  }

  startFight(): void {
    const p1 = new PlayerModel('The Empire', [new CharacterModel('Darth Vader', 50, 6, 100)]);
    const p2 = new PlayerModel('The Republic', [new CharacterModel('Obi-Wan Kenobi', 50, 4, 99),
        new CharacterModel('Qui-Gon Jinn', 20, 10, 101)]);
    this.currentFight = new FightModel(p1, p2);
    this.modeService.updateMode(Mode.FIGHT);
    this.notifyTurn(this.currentFight.playATurn());
  }

  public notifyTurn(character: CharacterModel) {
    console.log(character);
    this.snackBar.open(`${character.name}'s turn !`, undefined, {
      'duration': 1996
    });
  }

}
