import { Component, OnInit } from '@angular/core';
import {PlayerModel} from "../../../../shared/models/PlayerModel";
import {CharacterClass} from "../../../../shared/constants/character-class";
import {CharacterClassModel} from "../../../../shared/models/CharacterClassModel";
import {CharacterModel} from "../../../../shared/models/characters/CharacterModel";

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  public players = [new PlayerModel('Player 1'), new PlayerModel('Player 2')];
  public availableClass = CharacterClass;
  public nbOfClass = Object.keys(this.availableClass).length;

  public currentSelectingPlayer: PlayerModel;
  public index = 0;

  constructor() {
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

  public ready() {
    this.index++;
    if (this.index >= this.players.length) {
      console.log('Ok');
    } else {
      this.currentSelectingPlayer = this.players[this.index];
    }
  }

}
