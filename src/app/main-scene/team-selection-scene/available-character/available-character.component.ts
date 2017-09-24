import { Component, OnInit } from '@angular/core';
import {CharacterClass} from "../../../../shared/constants/character-class";

@Component({
  selector: 'app-available-character',
  templateUrl: './available-character.component.html',
  styleUrls: ['./available-character.component.css']
})
export class AvailableCharacterComponent implements OnInit {

  public availableClass = CharacterClass;
  public nbOfClass = Object.keys(this.availableClass).length;

  constructor() { }

  ngOnInit() {
    console.log(this.availableClass);
  }

}
