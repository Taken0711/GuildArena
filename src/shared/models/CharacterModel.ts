export class CharacterModel {

  public static BASE_SPEED = 100;

  public name: string;
  public clazz: string;
  public maxHp: number;
  public attack: number;
  public speed: number;

  public hp: number;
  public turnSpeed: number;


  constructor(name: string, maxHp: number, attack: number, speed: number) {
    this.name = name;
    this.clazz = 'Unknown class';
    this.maxHp = maxHp;
    this.attack = attack;
    this.speed = speed;
  }

  resetToFight() {
    this.hp = this.maxHp;
    this.turnSpeed = 0;
  }
}
