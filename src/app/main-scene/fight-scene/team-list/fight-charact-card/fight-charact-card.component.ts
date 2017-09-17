import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from "../../../../../shared/models/CharacterModel";

@Component({
  selector: 'app-fight-charact-card',
  templateUrl: './fight-charact-card.component.html',
  styleUrls: ['./fight-charact-card.component.css']
})
export class FightCharactCardComponent implements OnInit {

  @Input() character: CharacterModel;

  constructor() { }

  ngOnInit() {
  }

}
