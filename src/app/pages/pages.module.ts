import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modulos Routing
import { RoutingModule } from './routing.module';


// Modulos
import { SharedModule } from '../shared/shared.module';
//Paginas
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';





@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
