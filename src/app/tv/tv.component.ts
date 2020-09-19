import { Component, OnInit } from '@angular/core';
import {AllServiceService} from '../all-service.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  treningTvs: any[];
  imgSrc:string='https://image.tmdb.org/t/p/w500';
  constructor(_TvService: AllServiceService) {
    _TvService.getTreningTvs().subscribe((data)=>{
      this.treningTvs=data.results
    })
  }

  ngOnInit(): void {
  }

}
