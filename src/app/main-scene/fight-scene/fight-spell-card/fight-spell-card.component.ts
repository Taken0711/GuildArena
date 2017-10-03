import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {SpellModel} from "../../../../shared/models/SpellModel";
import {FightService} from "../../../../shared/services/fight/fight.service";
import {SpellIconDirective} from "../../../../shared/directives/spell-icon/spell-icon.directive";

@Component({
  selector: 'app-fight-spell-card',
  templateUrl: './fight-spell-card.component.html',
  styleUrls: ['./fight-spell-card.component.css']
})
export class FightSpellCardComponent implements OnInit, AfterViewInit {
  @ViewChild(SpellIconDirective) ic: SpellIconDirective;

  @Input() public spell: SpellModel;

  public selected = false;
  public borderStyle: string;
  constructor(private fightService: FightService) { }

  ngOnInit() {
    this.fightService.currentSelectedSpell$.subscribe(spell => {
      if (this.ic === undefined) {
        return;
      }
      if (spell === this.spell) {
        /*this.selected = true;
        this.borderStyle = 'solid';*/
        this.ic.enableBorder();
      } else {
        /*this.selected = false;
        this.borderStyle = 'none';*/
        this.ic.disableBorder();
      }
    });
  }

  ngAfterViewInit(): void {
    console.log(this.ic)
  }

  selectSpell() {
    this.fightService.updateCurrentSelectedSpell(this.spell);
  }

}
