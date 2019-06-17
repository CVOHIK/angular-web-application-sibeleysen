import { Component, OnInit, NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { SporthalService } from 'src/app/service/sporthal.service';
import { Sporthal } from 'src/app/interface/sporthal';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
})

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  title: string = 'Antwerpen';

  sporthallen : Sporthal[];

  // Constructor gebruik makende van service
  constructor(private sporthalservice:SporthalService) {
   }

  ngOnInit() {
    this.sporthallen = [];
    this.getsporthallenFromService();
  }

  //Ophalen data via service en linken aan array en datasource 
  getsporthallenFromService() : void{
    this.sporthalservice.getSporthallen().subscribe(sporthallen =>{
    this.sporthallen = sporthallen;
    })
  }
}



