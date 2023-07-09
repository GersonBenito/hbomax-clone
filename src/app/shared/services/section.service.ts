import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment as env } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Movie } from '@core/models/movies.interface';


@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private http = inject(HttpClient);
  private readonly URL: string = env.urlBase;

  getSection(section: string, page: number, type: string): Observable<Movie>{
    return this.http.get<Movie>(`${this.URL}/${type}/${section}?page=${page}`);
  }

}
