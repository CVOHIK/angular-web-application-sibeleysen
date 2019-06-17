import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module"
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MapComponent } from './component/map/map.component';
import { MenuComponent } from './component/menu/menu.component';
import { ContactComponent } from './component/contact/contact.component';
import { DataComponent } from './component/data/data.component';

import { AgmCoreModule } from '@agm/core';

import { HttpClientModule } from '@angular/common/http';
import { SporthalService } from './service/sporthal.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuComponent,
    ContactComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatPaginatorModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpcz4zxy3kX5Ao61RezEjKkjtOKs0t9-w'
    })
  ],
  providers: [SporthalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
