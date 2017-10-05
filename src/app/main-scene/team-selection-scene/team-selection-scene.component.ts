import { Component, OnInit } from '@angular/core';
import {CharacterModel} from "../../../shared/models/characters/CharacterModel";
import {CharacterClassModel} from "../../../shared/models/classes/CharacterClassModel";
import {PlayerModel} from "../../../shared/models/PlayerModel";
import {CharacterClass} from "../../../shared/constants/character-class";
import {FightService} from "../../../shared/services/fight/fight.service";
import {ModeService} from "../../../shared/services/mode/mode.service";
import {FightModel} from "../../../shared/models/FightModel";
import {Mode} from "../../../shared/constants/mode";

@Component({
  selector: 'app-team-selection-scene',
  templateUrl: './team-selection-scene.component.html',
  styleUrls: ['./team-selection-scene.component.css']
})
export class TeamSelectionSceneComponent implements OnInit {

  public players = [new PlayerModel('Player 1'), new PlayerModel('Player 2')];
  public availableClass = CharacterClass;
  public nbOfClass = Object.keys(this.availableClass).length;

  public currentSelectingPlayer: PlayerModel;
  public index = 0;

  constructor(private fightService: FightService, private modeService: ModeService) {
    this.currentSelectingPlayer = this.players[0];
  }

  ngOnInit() {
  }

  public selectClass(clazz: CharacterClassModel): void {
    if (this.currentSelectingPlayer.team.length >= 5) {
      return;
    }
    this.currentSelectingPlayer.team.push(new CharacterModel(clazz));
  }

  public reset(): void {
    this.currentSelectingPlayer.team = [];
  }

  public remove(character: CharacterModel) {
    const index = this.currentSelectingPlayer.team.indexOf(character);
    if (this.index > -1) {
      this.currentSelectingPlayer.team.splice(index, 1);
    }
  }

  public ready() {
    this.index++;
    if (this.index >= this.players.length) {
      this.fightService.updateCurrentFight(new FightModel(this.players[0], this.players[1]));
      this.modeService.updateMode(Mode.FIGHT);
    } else {
      this.currentSelectingPlayer = this.players[this.index];
    }
  }

}
