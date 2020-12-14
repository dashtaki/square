import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { HttpClientModule } from '@angular/common/http';
import { TileComponent } from './tile/tile.component';

const DECLARATIONS = [AppComponent, SquareComponent, TileComponent];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
