import { Component, inject } from '@angular/core';

enum Poids {
  'moyen', 
  'grande', 
  'petite'
}
@Component({
  selector: 'app-poule',
  templateUrl: './poule.component.html',
  styleUrls: ['./poule.component.css']
})

export class PouleComponent {
  //liste des produits
  id! : number;
  date! : Date;
  race! : String;
  sexe! : String;
  poids! : Poids;
  
  poules = [

  ];
  
  constructor(){
   
  };
}
