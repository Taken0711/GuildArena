import {HunterClassModel} from "../models/classes/HunterClassModel";
import {MageClassModel} from "../models/classes/MageClassModel";
import {PaladinClassModel} from "../models/classes/PaladinClassModel";
import {PriestClassModel} from "../models/classes/PriestClassModel";
import {RogueClassModel} from "../models/classes/RogueClassModel";
import {WarriorClassModel} from "../models/classes/WarriorClassModel";
import {WizardClassModel} from "../models/classes/WizardClassModel";

export const CharacterClass = {
  'HUNTER': new HunterClassModel(),
  'MAGE': new MageClassModel(),
  'PALADIN': new PaladinClassModel(),
  'PRIEST': new PriestClassModel(),
  'ROGUE': new RogueClassModel(),
  'WARRIOR': new WarriorClassModel(),
  'WIZARD': new WizardClassModel(),
};
