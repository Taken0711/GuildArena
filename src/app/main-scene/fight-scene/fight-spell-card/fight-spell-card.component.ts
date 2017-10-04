import {Component, Input, OnInit} from '@angular/core';
import {SpellModel} from "../../../../shared/models/SpellModel";
import {FightService} from "../../../../shared/services/fight/fight.service";

const enum SpellState {
  AVAILABLE,
  SELECTED,
  COOLDOWN,
}

@Component({
  selector: 'app-fight-spell-card',
  templateUrl: './fight-spell-card.component.html',
  styleUrls: ['./fight-spell-card.component.css']
})
export class FightSpellCardComponent implements OnInit {

  @Input() public spell: SpellModel;
  public state: SpellState = SpellState.AVAILABLE;

  constructor(private fightService: FightService) { }

  ngOnInit() {
    this.fightService.currentSelectedSpell$.subscribe(spell => {
      if (spell === this.spell) {
        this.state = SpellState.SELECTED;
      } else {
        this.state = SpellState.AVAILABLE;
      }
    });
  }

  public selectSpell(): void {
    this.fightService.updateCurrentSelectedSpell(this.spell);
  }

  public isSelected(): boolean {
    return this.state === SpellState.SELECTED;
  }

}
