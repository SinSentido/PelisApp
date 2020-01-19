import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieId: number;
  movie: any;

  constructor(private route: ActivatedRoute, private tmdb: TmdbService) {
    this.route.queryParams.subscribe(params => {
      this.movieId = params["id"];
    });
  }

  ngOnInit() {
    this.tmdb.requestMovieById(this.movieId.toString()).subscribe(rqMovie => this.movie = rqMovie);
    setTimeout(() => {
      console.log(this.movie);
    }, 1000);
  }

}
