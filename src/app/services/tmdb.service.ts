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

  requestMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=ba614009e206e03fe68b98b703041b7d&language=en-US&page=1')
    .subscribe(movies => console.log(movies));
  }

  moviesToArray(moviesObj: object){
    if(moviesObj == null){
      return null
    }

    else{
    }
  }
}
