import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainSceneModule} from './main-scene/main-scene.module';
import {WinnerDialogComponent} from './main-scene/fight-scene/winner-dialog/winner-dialog.component';
import {MdButtonModule, MdDialogModule} from '@angular/material';
import {PipesModule} from "../shared/pipes/pipes.module";
import {DirectivesModule} from "../shared/directives/directives.module";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    WinnerDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PipesModule,
    DirectivesModule,
    MainSceneModule,
    MdButtonModule,
    MdDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WinnerDialogComponent]
})
export class AppModule { }
