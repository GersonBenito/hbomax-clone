import { Component, Input, OnInit, inject } from '@angular/core';
import { Result } from '@core/models/movies.interface';
import { MoviesService } from '@shared/services/movies.service';
import { environment as env } from 'src/environments/environment.development';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{

  @Input() public categorie: string = '';
  @Input() public section: string = '';
  @Input() public type: string = '';

  public movies: Result[] = [];
  public movie: Result = {
    adult:             false,
    backdrop_path:     '',
    id:                0,
    title:             '',
    original_title:    '',
    overview:          '',
    poster_path:       '',
    genre_ids:         [],
    popularity:        0,
    release_date:      new Date(),
    video:             false,
    vote_average:      0,
    vote_count:        0,
  };
  public next: number = 0;
  public disbled: boolean = true;

  private _movieService = inject(MoviesService);


  ngOnInit(): void {
      // mostrar una pelicula cada cierto tiempo
      this.getMoviesPupulars();
      setInterval(()=>{
        this.nextMovie();
      }, 3500);
  }

  getMoviesPupulars(){
    this._movieService.getMoviesPopular(this.categorie,this.section, this.type).subscribe({
      next: response => {
        this.movies = response.results.slice(0, 5);
        this.next = this.movies.length;
        this.getOnlyMovie(this.next);
      },
      error: error => {
        console.log(error);
      }
    })
  }

  nextMovie(){
    this.next--;
    this.disbled = false;
    // se reestable el contador
    if(this.next <= 0){
      this.next = this.movies.length;
      this.disbled = true;
    }
    this.getOnlyMovie(this.next);
  }

  previusMovie(){
    this.next++;
    if(this.next >= this.movies.length){
      this.disbled = true;
    }
    this.getOnlyMovie(this.next)
  }

  getOnlyMovie(counter: number){
    this.movie = this.movies[this.movies.length - counter]; // obtener una pelicula
    this.movie = {
      ...this.movie,
      backdrop_path: `${env.urlBaseImage}${this.movie.backdrop_path}` // concatener la url base de la imagen
    }
  }
}
