import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
  declarations: [
    FirstLetterPipe,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    FirstLetterPipe,
    SliderComponent 
  ]
})
export class SharedModule { }
