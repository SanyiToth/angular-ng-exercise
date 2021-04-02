import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EmojifyModule} from 'angular-emojify';

import {AppComponent} from './app.component';
import {NgClassExerciseComponent} from './ng-class-exercise/ng-class-exercise.component';
import { RelativeTimePipe } from './relative-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgClassExerciseComponent,
    RelativeTimePipe
  ],
  imports: [
    BrowserModule,
    EmojifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
