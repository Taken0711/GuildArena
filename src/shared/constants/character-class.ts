import {CharacterClassModel} from '../models/CharacterClassModel';
import {CharacterStatsModel} from '../models/CharacterStatsModel';

const BASE_STATS = {
  WARRIOR:  new CharacterStatsModel(100, 7, 100),
  PALADIN:  new CharacterStatsModel(90, 8, 100),
  ROGUE:    new CharacterStatsModel(70, 7, 140),
  MAGE:     new CharacterStatsModel(50, 14, 99),
  WIZARD:   new CharacterStatsModel(50, 14, 99),
  HUNTER:   new CharacterStatsModel(50, 10, 130),
  PRIEST:   new CharacterStatsModel(50, 8, 100),
};

const CHARACTER_DESCRIPTION = {
  WARRIOR:  'Strong and brutal, warriors are expert in close fight and difficult to kill',
  PALADIN:  'Combining strength and magi, paladins can protect their allies and deal strong damages',
  ROGUE:    'Vicious and blood thirty, rogue can kill an entire team one by one, but they can\'t take too many damages',
  MAGE:     'With their powerful magical spells, mages can devastate an entire team, but they can also die very quickly',
  WIZARD:   'With their powerful elemental spells, wizards can devastate an entire team, but they can also die very quickly',
  HUNTER:   'Hunters battle their foes at a distance, they can easily kill enemies but also easily get hurt',
  PRIEST:   'Priests use healing magic and offensive spells, but they can be overwhelmed due to their physical frailty',
};


export const CharacterClass = {
  'HUNTER': new CharacterClassModel('Hunter', CHARACTER_DESCRIPTION.HUNTER),
  'MAGE': new CharacterClassModel('Mage', CHARACTER_DESCRIPTION.MAGE),
  'PALADIN': new CharacterClassModel('Paladin', CHARACTER_DESCRIPTION.PALADIN),
  'PRIEST': new CharacterClassModel('Priest', CHARACTER_DESCRIPTION.PRIEST),
  'ROGUE': new CharacterClassModel('Rogue', CHARACTER_DESCRIPTION.ROGUE),
  'WARRIOR': new CharacterClassModel('Warrior', CHARACTER_DESCRIPTION.WARRIOR),
  'WIZARD': new CharacterClassModel('Wizard', CHARACTER_DESCRIPTION.WIZARD),
};
