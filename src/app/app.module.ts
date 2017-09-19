import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainSceneModule} from './main-scene/main-scene.module';
import { BackgroundColorDirective } from '../shared/directives/background-color/background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BackgroundColorDirective,
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
