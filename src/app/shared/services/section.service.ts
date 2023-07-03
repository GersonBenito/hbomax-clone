import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Movie } from '@core/models/movies.interface';
// import { Categories } from '@core/enums/categories';


@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private http = inject(HttpClient);
  private params = new HttpParams().set('language', 'en-US');
  private headers = new HttpHeaders({
    accept: 'application/json',
    Authorization: `Bearer ${env.token}`
  });

  private readonly URL: string = env.urlBase;

  constructor() { }

  getSection(section: string, page: number, type: string): Observable<Movie>{
    return this.http.get<Movie>(`${this.URL}/${type}/${section}?page=${page}`, {
      params: this.params,
      headers: this.headers
    });
  }
}
