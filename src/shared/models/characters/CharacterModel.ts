import {ReplaySubject} from "rxjs/ReplaySubject";
import {ClassModel} from "../ClassModel";

export class CharacterModel {

  public static readonly BASE_SPEED = 100;
  public static readonly DEFAULT_CLASS = new ClassModel('Unknown class', 'Unknown class');

  public readonly name: string;
  public readonly clazz: ClassModel;
  public readonly maxHp: number;
  public readonly attack: number;
  public readonly speed: number;

  public hp: number;
  public turnSpeed: number;
  public death$: ReplaySubject<boolean>;


  constructor(name: string, clazz = new ClassModel('Unknown class', 'Unknown class'), maxHp: number, attack: number, speed: number) {
    this.name = name;
    this.clazz = clazz;
    this.maxHp = maxHp;
    this.attack = attack;
    this.speed = speed;

    this.death$ = new ReplaySubject<boolean>(1);
  }

  public resetToFight(): void {
    this.hp = this.maxHp;
    this.turnSpeed = 0;
    this.death$.next(false);
  }

  public takeDamages(damages: number): void {
    this.hp -= damages;
    if (this.isDead()) {
      this.death$.next(true);
    }
  }

  public isDead(): boolean {
    return this.hp <= 0;
  }

  public basicAttack(): number {
    this.turnSpeed = 0;
    return this.attack;
  }

}
