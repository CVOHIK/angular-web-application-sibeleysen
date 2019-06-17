import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sporthal } from '../interface/sporthal';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SporthalService {

  sporthallen : Sporthal[];
  urlSporthal: string = "https://opendata.arcgis.com/datasets/b5f4516df41545299730850103c6443d_643.geojson"

  constructor(private http:HttpClient) { 
    this.sporthallen = [];
  }

  public getSporthallen() : Observable<Sporthal[]> {
    return this.http.get<[Sporthal]>(this.urlSporthal).pipe(
      map((res) => {
        console.log(res)
        this.sporthallen = res
        return res["features"];
      })
    );
  }
}

