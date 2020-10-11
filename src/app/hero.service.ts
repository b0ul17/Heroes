import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) {}


  getHeroes() {
    return this.http
      .get<Hero[]>(`${environment.apiUrl}`)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getHero(id: string): Observable<Hero> {
    return this.http
    .get<Hero>(`${environment.apiUrl}/${id}`)
    .pipe(map(data => data), catchError(this.handleError));
  }

  delete(hero: Hero) {
    const url = `${environment.apiUrl}/${hero.id}`;

    return this.http.delete<Hero>(url).pipe(catchError(this.handleError));
  }


  save(hero: Hero) {
    return this.post(hero);
  }


   // Add new Hero
   private post(hero: Hero) {
    return this.http
      .post<Hero>(`${environment.apiUrl}`, hero)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }

}
