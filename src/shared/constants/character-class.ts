import {CharacterClassModel} from "../models/CharacterClassModel";
import {CHARACTER_DESCRIPTION} from "./character-description";
import {BASE_STATS} from "./character-base-stats";

export const CharacterClass = {
  'HUNTER': new CharacterClassModel('Hunter', CHARACTER_DESCRIPTION.HUNTER, 'Anasasiel', BASE_STATS.HUNTER),
  'MAGE': new CharacterClassModel('Mage', CHARACTER_DESCRIPTION.MAGE, 'Velvet', BASE_STATS.MAGE),
  'PALADIN': new CharacterClassModel('Paladin', CHARACTER_DESCRIPTION.PALADIN, 'Inhora', BASE_STATS.PALADIN),
  'PRIEST': new CharacterClassModel('Priest', CHARACTER_DESCRIPTION.PRIEST, 'Asharae', BASE_STATS.PRIEST),
  'ROGUE': new CharacterClassModel('Rogue', CHARACTER_DESCRIPTION.ROGUE, 'Red', BASE_STATS.ROGUE),
  'WARRIOR': new CharacterClassModel('Warrior', CHARACTER_DESCRIPTION.WARRIOR, 'Ailfir', BASE_STATS.WARRIOR),
  'WIZARD': new CharacterClassModel('Wizard', CHARACTER_DESCRIPTION.WIZARD, 'Leaena', BASE_STATS.WIZARD),
};
