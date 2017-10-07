import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../spells/SpellModel";
import {DistantShootingSpell} from "../spells/hunter/DistantShootingSpell";
import {DoubleShotSpell} from "../spells/hunter/DoubleShotSpell";
import {PowerfulShootingSpell} from "../spells/hunter/PowerfulShootingSpell";

export class HunterClassModel extends CharacterClassModel {

  constructor() {
    super('Hunter', CHARACTER_DESCRIPTION.HUNTER, 'Anasasiel', BASE_STATS.HUNTER);
    this.registerSpell(new DistantShootingSpell());
    this.registerSpell(new DoubleShotSpell());
    this.registerSpell(new PowerfulShootingSpell());
  }

}
