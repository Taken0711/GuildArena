import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainSceneModule} from './main-scene/main-scene.module';
import { CharacterCardBackgroundDirective } from '../shared/directives/character-card-background/character-card-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CharacterCardBackgroundDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainSceneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
