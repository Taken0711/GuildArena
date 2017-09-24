import {CharacterStatsModel} from "../models/CharacterStatsModel";

export const BASE_STATS = {
  WARRIOR:  new CharacterStatsModel(100, 7, 100),
  PALADIN:  new CharacterStatsModel(90, 8, 100),
  ROGUE:    new CharacterStatsModel(70, 7, 140),
  MAGE:     new CharacterStatsModel(50, 14, 99),
  WIZARD:   new CharacterStatsModel(50, 14, 99),
  HUNTER:   new CharacterStatsModel(50, 10, 130),
  PRIEST:   new CharacterStatsModel(50, 8, 100),
};
