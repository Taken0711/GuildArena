import {CharacterModel} from "../characters/CharacterModel";

export interface Castable {

  readonly ratio: number;

  cast(caster: CharacterModel, target: CharacterModel): void;

}
