import { Injectable } from '@angular/core';
import {CharacterModel} from '../../models/CharacterModel';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class FightService {

  public currentPlayingCharacter$: ReplaySubject<CharacterModel>;

  constructor() {
    this.currentPlayingCharacter$ = new ReplaySubject(1);
  }

  updateCurrentPlayingCharacter(playingCharacter: CharacterModel) {
    this.currentPlayingCharacter$.next(playingCharacter);
  }

}
