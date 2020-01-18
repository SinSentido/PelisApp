import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /*Variables related with the home title*/
  selectedGenre = "";
  subTitle = 'Todas las películas';
  headerImage = "https://s.studiobinder.com/wp-content/uploads/2019/09/Movie-Genres-Types-of-Movies-List-of-Genres-and-Categories-Header-StudioBinder.jpg";

  /*Variables related with the load of movies*/
  genreId = 0; //used to look for genre
  nameToLookFor = ""; //used to search movies
  pageToShow = 1;
  loading = true;
  movies: any[] = [];
  loadedMovies: any[] = [];

  /*Variables for the movie trailer*/
  trailerSection = false;
  ytURL = "https://www.youtube.com/embed/";
  movieTrailerKey = "";
  trailerURL = "";

  constructor(private tmdb: TmdbService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.tmdb.requestPopularMoviesByPage(this.pageToShow.toString()).subscribe(rqMovies => this.movies = rqMovies.results);
    setTimeout(() => {
      this.pushMovies();
    }, 200);
  }

  getMoviesByGenre(){
    this.tmdb.requestMoviesByGenre(this.genreId.toString(), this.pageToShow.toString())
    .subscribe(rqMovies => this.movies = rqMovies.results);
    setTimeout(() => {
      this.pushMovies();
      console.log(this.movies);
    }, 200);
  }

  pushMovies(){
    setTimeout(() => {
      for(let i=0; i<20; i++){
        this.loadedMovies.push(this.movies[i]);
        this.loading = false;
      }
    }, 2000);
  }

  viewMore(){
    this.pageToShow++;
    this.loading = true;
    if(this.genreId != 0){
      this.getMoviesByGenre();
    }
    else{
      this.getMovies();
    }
  }

  filterMovies(){
    this.selectGenre();
    this.loadedMovies = [];
    this.pageToShow = 1;
    if(this.genreId != 0){
      this.getMoviesByGenre();
    }
    else{
      this.getMovies();
    }
  }

  viewTrailer(id: string){
    if(!this.trailerSection){
      this.tmdb.requestMovieTrailer(id).subscribe(rqTrailer => this.movieTrailerKey = rqTrailer.results[0].key);
      setTimeout(() => {
        console.log(this.movieTrailerKey);
            this.trailerURL = this.ytURL + this.movieTrailerKey;
                  this.trailerSection = true;
      },500);

    }
  }

  searchMovie(){
    this.pageToShow = 1;
    this.loadedMovies = [];
    if(this.nameToLookFor != ""){
      this.tmdb.requestMoviesByName(this.nameToLookFor, this.pageToShow).subscribe(rqMovies => this.movies = rqMovies.results);
      setTimeout(() => {
        this.pushMovies();
        console.log(this.movies);
      }, 200);
    }


  }

  closeTrailer(){
    this.trailerSection = false;
  }

  selectGenre(){
    switch(this.selectedGenre){
      case "Action":{
        this.genreId = 28;
        this.headerImage = "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/02/mad-max-fury-road-charlize-theron-secuela.jpg?fit=1080%2C608&quality=80&ssl=1";
        this.subTitle = "Acción";
        break;
      }
      case "Adventure":{
        this.genreId = 12;
        this.headerImage = "https://s.libertaddigital.com/2017/11/14/1920/1080/fit/elsenoranillos.jpg";
        this.subTitle = "Aventuras";
        break;
      }
      case "Animation":{
        this.genreId = 16;
        this.headerImage = "https://todasgamers.com/wp-content/uploads/2016/12/kingsglaive.png";
        this.subTitle = "Animación";
        break;
      }
      case "Comedy":{
        this.genreId = 35;
        this.headerImage = "http://es.web.img3.acsta.net/r_640_360/newsv7/19/07/25/11/24/1663325.jpg";
        this.subTitle = "Comedia";
        break;
      }
      case "Crime":{
        this.genreId = 80;
        this.headerImage = "https://new.static.tv.nu/19498425?forceFit=0&height=760&quality=50&width=1350";
        this.subTitle = "Crimen";
        break;
      }
      case "Documentary":{
        this.genreId = 99;
        this.headerImage = "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2014/02/aaron-swartz.jpg?resize=1080%2C608&quality=80&ssl=1";
        this.subTitle = "Documentales ";
        break;
      }
      case "Drama":{
        this.genreId = 18;
        this.headerImage = "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/MiscCategory7/B007CGLRWA_Detachment_UXTB1._SX1080_.jpg";
        this.subTitle = "Drama";
        break;
      }
      case "Family":{
        this.genreId = 10751;
        this.subTitle = "Familia";
        break;
      }
      case "Fantasy":{
        this.genreId = 14;
        this.headerImage = "https://radiomitre.cienradios.com/wp-content/uploads/sites/3/2019/12/Harry.jpg";
        this.subTitle = "Fantasía";
        break;
      }
      case "History":{
        this.genreId = 36;
        this.headerImage = "http://img2.rtve.es/v/2192631?w=1600&preview=1386173053819.jpg";
        this.subTitle = "Historia";
        break;
      }
      case "Horror":{
        this.genreId = 27;
        this.subTitle = "Miedo";
        break;
      }
      case "Music":{
        this.genreId = 10402;
        this.subTitle = "Música";
        break;
      }
      case "Mistery":{
        this.genreId = 9648;
        this.subTitle = "Misterio";
        break;
      }
      case "Romance":{
        this.genreId = 10749;
        this.subTitle = "Romance";
        this.headerImage = "https://i.ytimg.com/vi/h4erO2z_F-g/maxresdefault.jpg";
        break;
      }
      case "Science Fiction":{
        this.genreId = 878;
        this.subTitle = "Ciencia ficción";
        this.headerImage = "https://ep01.epimg.net/elpais/imagenes/2017/02/08/tentaciones/1486558277_855896_1486559702_noticia_normal.jpg";
        break;
      }
      case "TV Movie":{
        this.genreId = 10770;
        this.subTitle = "TV Movies";
        this.headerImage = "https://img-cdn.hipertextual.com/files/2019/11/hipertextual-critica-the-irishman-oscuridad-hombres-regresa-cine-scorsese-2019479554.jpg?strip=all&lossy=1&quality=55&resize=960%2C640&ssl=1";
        break;
      }
      case "Thriller":{
        this.genreId = 53;
        this.subTitle = "Thriller";
        this.headerImage = "https://i.pinimg.com/originals/bb/03/3f/bb033fab6600dd26e70807a540536b2f.jpg";
        break;
      }
      case "War":{
        this.genreId = 10752;
        this.subTitle = "Guerra";
        this.headerImage = "https://specials-images.forbesimg.com/imageserve/5e0d37e20bf81b00072e4f67/960x0.jpg?cropX1=0&cropX2=1500&cropY1=156&cropY2=1000";
        break;
      }
      case "Western":{
        this.genreId = 37;
        this.subTitle = "Western";
        this.headerImage = "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/07/20-mejores-western-historia_19.jpg?itok=TDpu4U3Q";
        break;
      }
      case "All Movies":{
        this.genreId = 0;
        this.subTitle = "Todas las peliculas";
        this.headerImage = "https://s.studiobinder.com/wp-content/uploads/2019/09/Movie-Genres-Types-of-Movies-List-of-Genres-and-Categories-Header-StudioBinder.jpg"
        break;
      }


    }
  }
}
