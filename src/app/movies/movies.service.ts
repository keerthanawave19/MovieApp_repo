import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class MoviesService {
  constructor(private http: Http) {}
  myMovieSearch(x: string) {
  return this.http.get('https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query='+x+'&language=en-US&api_key=a93bbd324debeb9f0b0b813f80155508').map((response) => response.json().results || []);
               // getting response from url //
}
   favMovie() {
	return this.http.get ('http://localhost:8080/v1/api/movie/')
               .map (response => response.json() || []) ;
               }
  }


