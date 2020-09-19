import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(public _HttpClient:HttpClient) { }
  getTreningTvs():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?api_key=a4aa281a4db1d638c44e444833319ea4');
  }
  
  getTreningPeoples():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/person/popular?api_key=fa1bafb2d1dbd0f6870258fcf476f472&language=en-US&page=1')
  }
  getTreningMovies():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=a4aa281a4db1d638c44e444833319ea4')
  }
}
