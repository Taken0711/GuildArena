import {Component, Input, OnInit} from '@angular/core';
import {SpellModel} from "../../../../shared/models/spells/SpellModel";
import {FightService} from "../../../../shared/services/fight/fight.service";
import {CharacterModel} from "../../../../shared/models/characters/CharacterModel";

@Component({
  selector: 'app-fight-spell-card',
  templateUrl: './fight-spell-card.component.html',
  styleUrls: ['./fight-spell-card.component.css']
})
export class FightSpellCardComponent implements OnInit {

  @Input() public spell: SpellModel;
  @Input() public caster: CharacterModel;

  public selected: boolean;

  constructor(private fightService: FightService) { }

  ngOnInit() {
    // --- Events ---
    // Spell selection
    this.fightService.currentSelectedSpell$.subscribe(spell => {
      this.selected = spell === this.spell;
    });
  }

  public selectSpell(): void {
    if (this.isUnavailable()) {
      return;
    }
    this.fightService.updateCurrentSelectedSpell(this.spell);
  }

  public isUnavailable(): boolean {
    return this.isInCooldown() || this.caster.charges < this.spell.cost;
  }

  public isInCooldown(): boolean {
    return this.spell.turnCooldown > 0;
  }

}
