import {CharacterStatsModel} from '../CharacterStatsModel';
import {SpellModel} from "../spells/SpellModel";

export abstract class CharacterClassModel {

  public spells: SpellModel[] = [];

  constructor(public readonly name: string, public readonly description: string, public readonly characterName: string,
              public readonly stats: CharacterStatsModel) { }

  public registerSpell(spell: SpellModel): void {
    this.spells.push(spell.copy());
  }
}
