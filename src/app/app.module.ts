import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { HttpClientModule } from '@angular/common/http';
import { TileComponent } from './tile/tile.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './ngrx';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SquareEffect } from './square/store/square-effect';

const DECLARATIONS = [
  AppComponent,
  SquareComponent,
  TileComponent,
  SpinnerComponent,
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([SquareEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
