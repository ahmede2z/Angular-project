import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../all-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  treningMovies: any[];
  imgSrc: string = 'https://image.tmdb.org/t/p/w500';

  constructor(_PeooleService: AllServiceService) {
    _PeooleService.getTreningMovies().subscribe((data) => {
      this.treningMovies = data.results
    })
  }
  ngOnInit(): void {
  }

}
