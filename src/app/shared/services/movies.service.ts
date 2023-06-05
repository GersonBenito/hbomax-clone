import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Movie } from '@core/models/movies.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // constructor() { }

  // inject angular v14
  private http = inject(HttpClient);
  private params = new HttpParams().set('language', 'en-US');
  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: `Bearer ${env.token}` // obten tu token en https://developer.themoviedb.org/
  })
  private readonly URL: string = env.urlBase;

  getMoviesPopular(): Observable<Movie>{
    return this.http.get<Movie>(`${this.URL}/trending/movie/day?`, { 
      params: this.params, 
      headers: this.headers 
    });
  }
}
