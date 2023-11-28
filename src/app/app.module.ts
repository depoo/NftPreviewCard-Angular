import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NftModule } from './Nft/nft.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
;

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NftModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
