import {CharacterClassModel} from "./CharacterClassModel";
import {BASE_STATS} from "../../constants/character-base-stats";
import {CHARACTER_DESCRIPTION} from "../../constants/character-description";
import {SpellModel} from "../spells/SpellModel";
import {ExpelliarmusSpell} from "../spells/mage/ExpelliarmusSpell";
import {SectumSempraSpell} from "../spells/mage/SectumSempraSpell";
import {AvadaKedavraSpell} from "../spells/mage/AvadaKedavraSpell";
import {ConcentrateSpell} from "../spells/common/ConcentrateSpell";

export class MageClassModel extends CharacterClassModel {

  constructor() {
    super('Mage', CHARACTER_DESCRIPTION.MAGE, 'Velvet', BASE_STATS.MAGE);
    this.registerSpell(new ExpelliarmusSpell());
    this.registerSpell(new ConcentrateSpell());
    this.registerSpell(new SectumSempraSpell());
    this.registerSpell(new AvadaKedavraSpell());
  }

}
