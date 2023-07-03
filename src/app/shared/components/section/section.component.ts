import { Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { Movie, Result } from '@core/models/movies.interface';
import { SectionService } from '@shared/services/section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit{

  @Input() public titleSection: string = '';
  @Input() public movies: Result[] = [];
  @Input() public section: string = '';
  @Input() public categorie: string = '';
  @ViewChild('asCards') public cards!: ElementRef;
  public showPreviusButton: boolean = false;

  public page: number = 1;

  private _sectionService = inject(SectionService);

  ngOnInit(): void {
    this.getSection(this.page);
  }

  getSection(page: number): void {
    this._sectionService.getSection(this.section, page, this.categorie).subscribe({
      next: response =>{
        this.movies = response.results;
        // console.log(this.movies);
      },
      error: error =>{
        console.log(error);
        
      }
    })
  }

  next(){
    this.page++;
    const asCard = this.cards.nativeElement;
    asCard.scrollLeft = asCard.scrollLeft + 870;
    this.showPreviusButton = true;
  }

  previus(){
    this.page--;
    const asCard = this.cards.nativeElement;
    asCard.scrollLeft = asCard.scrollLeft - 870;
    if(asCard.scrollLeft === 0){
      this.showPreviusButton = false;
    }
  }

  eventScroll(event: any){
    const asCard = event.target;
    if(asCard.scrollLeft >= 150){
      this.showPreviusButton = true;
    }else{
      this.showPreviusButton = false;
    }
    if(asCard.scrollLeft === 0){
      this.showPreviusButton = false;
    }
    
  }

}
