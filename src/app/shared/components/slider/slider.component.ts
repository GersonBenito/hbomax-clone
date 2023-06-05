import { Component, OnInit } from '@angular/core';
import { MediaType, OriginalLanguage, Result } from '@core/models/movies.interface';
import { MoviesService } from '@shared/services/movies.service';
import { environment as env } from 'src/environments/environment.development';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{

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

  constructor(private _movieService: MoviesService){
    this.getMoviesPupulars();
  }

  ngOnInit(): void {
      // mostrar una pelicula cada cierto tiempo
      setInterval(()=>{
        this.nextMovie();
      }, 3500);
  }

  getMoviesPupulars(){
    this._movieService.getMoviesPopular().subscribe({
      next: response => {
        this.movies = response.results;
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
