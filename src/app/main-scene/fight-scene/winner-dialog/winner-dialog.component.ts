import {Component, Inject, Input, OnInit} from '@angular/core';
import {PlayerModel} from "../../../../shared/models/PlayerModel";
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.css']
})
export class WinnerDialogComponent {

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

}
