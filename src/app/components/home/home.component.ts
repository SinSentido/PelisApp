import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageToShow = 1;

  selectedGenre = "";
  subTitle = 'Mostrando todas las películas';
  headerImage = "https://s.studiobinder.com/wp-content/uploads/2019/09/Movie-Genres-Types-of-Movies-List-of-Genres-and-Categories-Header-StudioBinder.jpg"
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

  filterMovies(){
    this.selectGenre();
  }

  selectGenre(){
    switch(this.selectedGenre){
      case "Action":{
        this.subTitle = "Mostrando peliculas de acción";
        break;
      }
      case "Adventure":{
        this.subTitle = "Mostrando peliculas de aventuras";
        break;
      }
      case "Animation":{
        this.subTitle = "Mostrando peliculas de animación";
        break;
      }
      case "Comedy":{
        this.subTitle = "Mostrando peliculas de comedia";
        break;
      }
      case "Crime":{
        this.subTitle = "Mostrando peliculas de crimen";
        break;
      }
      case "Documentary":{
        this.subTitle = "Mostrando documentales ";
        break;
      }
      case "Drama":{
        this.subTitle = "Mostrando peliculas de drama";
        break;
      }
      case "Family":{
        this.subTitle = "Mostrando peliculas de familia";
        break;
      }
      case "Fantasy":{
        this.subTitle = "Mostrando peliculas de fantasía";
        break;
      }
      case "History":{
        this.subTitle = "Mostrando peliculas de historia";
        break;
      }
      case "Horror":{
        this.subTitle = "Mostrando peliculas de miedo";
        break;
      }
      case "Music":{
        this.subTitle = "Mostrando peliculas de música";
        break;
      }
      case "Mistery":{
        this.subTitle = "Mostrando peliculas de misterio";
        break;
      }
      case "Romance":{
        this.subTitle = "Mostrando peliculas de romance";
        this.headerImage = "https://i.ytimg.com/vi/h4erO2z_F-g/maxresdefault.jpg";
        break;
      }
      case "Science Fiction":{
        this.subTitle = "Mostrando peliculas de ciencia ficción";
        this.headerImage = "https://ep01.epimg.net/elpais/imagenes/2017/02/08/tentaciones/1486558277_855896_1486559702_noticia_normal.jpg";
        break;
      }
      case "TV Movie":{
        this.subTitle = "Mostrando peliculas de TV";
        this.headerImage = "https://img-cdn.hipertextual.com/files/2019/11/hipertextual-critica-the-irishman-oscuridad-hombres-regresa-cine-scorsese-2019479554.jpg?strip=all&lossy=1&quality=55&resize=960%2C640&ssl=1";
        break;
      }
      case "Thriller":{
        this.subTitle = "Mostrando peliculas de thriller";
        this.headerImage = "https://i.pinimg.com/originals/bb/03/3f/bb033fab6600dd26e70807a540536b2f.jpg";
        break;
      }
      case "War":{
        this.subTitle = "Mostrando peliculas de guerra";
        this.headerImage = "https://specials-images.forbesimg.com/imageserve/5e0d37e20bf81b00072e4f67/960x0.jpg?cropX1=0&cropX2=1500&cropY1=156&cropY2=1000";
        break;
      }
      case "Western":{
        this.subTitle = "Mostrando peliculas de western";
        this.headerImage = "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/07/20-mejores-western-historia_19.jpg?itok=TDpu4U3Q";
        break;
      }
      case "All Movies":{
        this.subTitle = "Mostrando todas las peliculas";
        this.headerImage = "https://s.studiobinder.com/wp-content/uploads/2019/09/Movie-Genres-Types-of-Movies-List-of-Genres-and-Categories-Header-StudioBinder.jpg"
        break;
      }


    }
  }
}
