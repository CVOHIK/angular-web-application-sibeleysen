import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { MapComponent } from './component/map/map.component';
import { DataComponent } from './component/data/data.component';
import { MenuComponent } from './component/menu/menu.component';

const routes: Routes = [
  {path:"contact",component:ContactComponent},
  {path:"map",component:MapComponent},
  {path:"data",component:DataComponent},
  {path:"menu",component:MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
