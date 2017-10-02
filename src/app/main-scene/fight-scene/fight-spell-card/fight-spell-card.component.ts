import {Component, Input, OnInit} from '@angular/core';
import {SpellModel} from "../../../../shared/models/SpellModel";
import {FightService} from "../../../../shared/services/fight/fight.service";

@Component({
  selector: 'app-fight-spell-card',
  templateUrl: './fight-spell-card.component.html',
  styleUrls: ['./fight-spell-card.component.css']
})
export class FightSpellCardComponent implements OnInit {

  @Input() public spell: SpellModel;
  public selected: boolean;
  public borderStyle: string;

  constructor(private fightService: FightService) { }

  ngOnInit() {
    this.fightService.currentSelectedSpell$.subscribe(spell => {
      if (spell === this.spell) {
        this.selected = true;
        this.borderStyle = 'solid';
      } else {
        this.selected = false;
        this.borderStyle = 'none';
      }
    });
  }

  selectSpell() {
    this.fightService.updateCurrentSelectedSpell(this.spell);
  }

}
