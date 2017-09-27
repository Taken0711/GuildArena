import { Component, OnInit } from '@angular/core';
import {ModeService} from '../../shared/services/mode/mode.service';
import {Mode} from '../../shared/constants/mode';
import {FightModel} from '../../shared/models/FightModel';
import {PlayerModel} from '../../shared/models/PlayerModel';
import {CharacterModel} from "shared/models/characters/CharacterModel";
import {CharacterClass} from "../../shared/constants/character-class";

@Component({
  selector: 'app-main-scene',
  templateUrl: './main-scene.component.html',
  styleUrls: ['./main-scene.component.css']
})
export class MainSceneComponent implements OnInit {

  mode = Mode;

  public currentMode: Mode;
  public currentFight: FightModel;

  constructor(private modeService: ModeService) {
  }

  ngOnInit() {
    // --- Events ---
    // Mode changing
    this.modeService.currentMode$.subscribe((newMode) => this.currentMode = newMode);
  }

}
