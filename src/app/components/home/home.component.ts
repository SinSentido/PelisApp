import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesToShow = 0;
  movies: any[] = [];
  loadedMovies: any[] = [];

  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
    this.tmdb.requestMovies;
    this.viewMore();
  }

  getMovies(){
    this.movies = this.tmdb.moviesArray;
  }

  viewMore(){
    setTimeout(() => {
      for(let i=0; i<25; i++){
        this.loadedMovies.push(this.movies[this.moviesToShow]);
        this.moviesToShow++;
      }
    }, 2000);

  }
}
