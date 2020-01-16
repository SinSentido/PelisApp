import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private tmdbApiKey = 'ba614009e206e03fe68b98b703041b7d';
  moviesArray: any[] = [];

  constructor(private http: HttpClient) { }

  requestPopularMoviesByPage(page: string): any{
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.tmdbApiKey + '&language=en-US&page=' + page);
  }

  requestLatestMovie(){

  }

  requestMoviesByGenre(genreId: string, page: string): any{
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.tmdbApiKey + '&with_genres=' + genreId + '&page=' + page);

  }

  moviesToArray(moviesObj: object){
  }


}
