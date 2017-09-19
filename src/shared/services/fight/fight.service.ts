import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {CharacterModel} from '../../models/CharacterModel';

@Injectable()
export class FightService {

  private currentPlayingCharacter$: BehaviorSubject<CharacterModel>;

  constructor() { }

  updateCurrentPlayingCharacter(playingCharacter: CharacterModel) {
    this.currentPlayingCharacter$.next(playingCharacter);
  }

}
