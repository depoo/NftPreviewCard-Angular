import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MoneyComponent } from './money/money.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    TitleComponent,
    ParagraphComponent,
    MoneyComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TitleComponent,
    ParagraphComponent,
    MoneyComponent,
  ]
})
export class NftModule { }
