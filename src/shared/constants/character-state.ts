export class CharacterState {

  public static IDLE = new CharacterState('white');
  public static ATTACK = new CharacterState('lightgreen');
  public static TARGET = new CharacterState('lightcoral');

  constructor(private color: string) {}

  public toString(): string {
    return this.color;
  }

}
