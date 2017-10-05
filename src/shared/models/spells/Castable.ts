import {CharacterModel} from "../characters/CharacterModel";
import {SpellType} from "../../constants/spell-type";

export interface Castable {

  readonly ratio: number;

  cast(caster: CharacterModel, target: CharacterModel): void;

  getType(): SpellType;

}
