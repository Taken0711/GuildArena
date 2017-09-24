import { Component, OnInit } from '@angular/core';
import {ModeService} from '../../shared/services/mode/mode.service';
import {Mode} from '../../shared/constants/mode';
import {FightModel} from '../../shared/models/FightModel';
import {PlayerModel} from '../../shared/models/PlayerModel';
import {CharacterModel} from "../../shared/models/characters/CharacterModel";
import {MdSnackBar} from "@angular/material";
import {FightService} from "../../shared/services/fight/fight.service";
import {MageModel} from "../../shared/models/characters/MageModel";
import {WarriorModel} from "../../shared/models/characters/WarriorModel";
import {HunterModel} from "../../shared/models/characters/HunterModel";
import {WizardModel} from "../../shared/models/characters/WizardModel";
import {PriestModel} from "../../shared/models/characters/PriestModel";
import {PaladinModel} from "../../shared/models/characters/PaladinModel";
import {RogueModel} from "../../shared/models/characters/RogueModel";

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

  startFight(): void {
    const p1 = new PlayerModel('Player 1', [new WarriorModel(), new MageModel(), new PriestModel(), new HunterModel(), new WizardModel()]);
    const p2 = new PlayerModel('Player 2', [new PaladinModel(), new RogueModel(), new HunterModel(), new WizardModel(), new PriestModel()]);
    this.currentFight = new FightModel(p1, p2);
    this.modeService.updateMode(Mode.FIGHT);
  }

}
