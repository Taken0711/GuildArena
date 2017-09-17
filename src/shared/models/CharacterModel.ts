export class CharacterModel {

  public name: string;
  public maxHp: number;
  public hp: number;
  public attack: number;
  public clazz: string;


  constructor(name: string, maxHp: number, attack: number) {
    this.name = name;
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.attack = attack;
    this.clazz = 'Unknown class';
  }


}
