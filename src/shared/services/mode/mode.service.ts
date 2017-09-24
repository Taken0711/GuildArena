import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Mode} from '../../constants/mode';

@Injectable()
export class ModeService {

  public currentMode$: BehaviorSubject<Mode>;

  constructor() {
    this.currentMode$ = new BehaviorSubject(Mode.SELECTING);
  }

  public updateMode(newMode: Mode) {
    this.currentMode$.next(newMode);
  }

}
