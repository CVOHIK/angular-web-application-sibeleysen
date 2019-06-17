import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatTableModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,  MatSortModule, MatPaginator, MatTableDataSource} from '@angular/material';
import { SporthalService } from 'src/app/service/sporthal.service';
import { Sporthal } from 'src/app/interface/sporthal';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule,MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
    MatSortModule, MatTableModule, MatPaginator, MatTableDataSource ],
})

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  sporthallen : Sporthal[];
  
  //declaren van de kolommen 
  displayedColumns= ["naam", "subtype", "straat", "huisnummer", "postcode", "district", "publiek" ];
  
  //Matpaginator declareren
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) dataSource: MatTableDataSource<Sporthal>;

  // Constructor gebruik makende van service
  constructor(private sporthalservice:SporthalService) {
   }

  ngOnInit() {
    this.sporthallen = [];
    this. getsporthallenFromService();
    }
  
  // Initiëren van de paginator pas na het vullen van de data in de tabel
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
   }

  //Ophalen data via service en linken aan array en datasource 
  getsporthallenFromService() : void{
    this.sporthalservice.getSporthallen().subscribe(sporthallen =>{
    this.sporthallen = sporthallen;
    this.dataSource = new MatTableDataSource(this.sporthallen);
    }) 
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  
}