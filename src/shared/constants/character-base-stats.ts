import {CharacterStatsModel} from "../models/CharacterStatsModel";

export const BASE_STATS = {
  WARRIOR:  new CharacterStatsModel(1000, 35, 100),
  PALADIN:  new CharacterStatsModel(900, 40, 100),
  ROGUE:    new CharacterStatsModel(700, 35, 140),
  MAGE:     new CharacterStatsModel(500, 70, 99),
  WIZARD:   new CharacterStatsModel(500, 70, 99),
  HUNTER:   new CharacterStatsModel(500, 50, 130),
  PRIEST:   new CharacterStatsModel(500, 40, 100),
};
