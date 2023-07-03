import { Component, Input } from '@angular/core';
import { Result } from '@core/models/movies.interface';
import { environment as env } from 'src/environments/environment.development';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public movie: Result = {
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
  // constructor(){
  //   this.movie = {
  //     ...this.movie,
  //     poster_path: `${env.urlBaseImage}/${this.movie.poster_path}`
  //   }
  // }
  public urlImage: string = env.urlBaseImage;

}
