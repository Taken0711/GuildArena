import {Component, Input, OnInit} from '@angular/core';
import {FightModel} from "../../../shared/models/FightModel";

@Component({
  selector: 'app-fight-scene',
  templateUrl: './fight-scene.component.html',
  styleUrls: ['./fight-scene.component.css']
})
export class FightSceneComponent implements OnInit {

  @Input() public currentFight: FightModel;

  constructor() { }

  ngOnInit() {
  }

}
