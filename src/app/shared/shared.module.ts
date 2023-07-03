import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { SliderComponent } from './components/slider/slider.component';
import { SectionComponent } from './components/section/section.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    FirstLetterPipe,
    SliderComponent,
    SectionComponent,
    CardComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    FirstLetterPipe,
    SliderComponent,
    SectionComponent,
    CardComponent,
  ]
})
export class SharedModule { }
