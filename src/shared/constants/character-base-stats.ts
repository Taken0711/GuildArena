import {CharacterStatsModel} from "../models/CharacterStatsModel";

export const BASE_STATS = {
  WARRIOR:  new CharacterStatsModel(1000, 35, 100),
  PALADIN:  new CharacterStatsModel(800, 40, 100),
  ROGUE:    new CharacterStatsModel(700, 35, 140),
  MAGE:     new CharacterStatsModel(500, 72, 99),
  WIZARD:   new CharacterStatsModel(500, 72, 99),
  HUNTER:   new CharacterStatsModel(500, 54, 130),
  PRIEST:   new CharacterStatsModel(500, 50, 110),
};
