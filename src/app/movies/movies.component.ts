import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-comp',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
moviesName = [];
f=[];
  constructor(
    private MoviesService: MoviesService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.MoviesService.myMovieSearch(params['x']))
      .subscribe(moviesName => this.moviesName = moviesName);
      // stored locally the moviename //
    }
      favMovie(){
    this.MoviesService.favMovie().subscribe(myfav => this.f=myfav);
}
}
