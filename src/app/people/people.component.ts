import { Component, OnInit } from '@angular/core';
import {AllServiceService} from '../all-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  treningPeoples:any[];
  imgSrc:string='https://image.tmdb.org/t/p/w500';

  constructor(_PeooleService:AllServiceService) { 
    _PeooleService.getTreningPeoples().subscribe((data)=>{
      this.treningPeoples=data.results
    })
  }

  ngOnInit(): void {
  }

}
