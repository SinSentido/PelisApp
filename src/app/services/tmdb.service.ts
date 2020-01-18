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

  requestMoviesByName(name: string, page: string){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.tmdbApiKey + '&language=en-US&query=' + name + '&page=' + page + '&include_adult=false');
  }

  requestMoviesByGenre(genreId: string, page: string): any{
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=' + this.tmdbApiKey + '&with_genres=' + genreId + '&page=' + page);
  }

  requestMovieTrailer(movieId: string): any{
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=' + this.tmdbApiKey + '&language=en-US');
  }


}
