import {Component, Input, OnInit} from '@angular/core';
import {PlayerModel} from '../../../../shared/models/PlayerModel';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  @Input() public player: PlayerModel;

  constructor() { }

  ngOnInit() {
  }

}
