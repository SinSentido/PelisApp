import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageToShow = 1;
  movies: any[] = [];
  loadedMovies: any[] = [];

  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.tmdb.requestPopularMoviesByPage(this.pageToShow.toString()).subscribe(rqMovies => this.movies = rqMovies.results);
    setTimeout(() => {
      this.pushMovies();
    }, 500);

    this.pageToShow++;
  }

  pushMovies(){
    setTimeout(() => {
      for(let i=0; i<20; i++){
        this.loadedMovies.push(this.movies[i]);
      }
    }, 2000);
  }

  viewMore(){
    this.getMovies();
  }
}
