import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Vente } from '../models/vente.model';
import { VenteService } from '../services/vente.service';

enum Qualite {
  'bon' = 'bon',
  'mauvais' = 'mauvais'
}
enum Produit {
  oeuf = 'oeuf',
  poule = 'poule'
}
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {
  ventes!: Array<Vente>;
  errorMessage!: String;
  searchFormGroup!: FormGroup;
  totalPages: number = 0;
  currentPage: number = 0;

  constructor(private venteService: VenteService, private route: Router) { }

  ngOnInit(): void {
    this.handleGetAllVentes();
  }


  handleSearchVente() {
    throw new Error('Method not implemented.');
  }

  public handleEditVente(v: Vente) { }

  public handleDeleteVente(vente: Vente) {
    let conf = confirm('Etes-vous vraiment certain de vouloir supprimer?');
    if (conf) {
      this.venteService.deleteVente(vente.id).subscribe({
        next: (value) => {
          this.ventes = this.ventes.filter(v => v.id != vente.id)
        }, error: (err) => {
          this.errorMessage = err;
        },
      })
    }
  }

  public handleGetAllVentes() {
    this.venteService.getAllVentes().subscribe({
      next: (value) => {
        this.ventes = value;
      }, error: (err) => {
        this.errorMessage = err;
      }
    })
  }

  public goToPage(i: number) { }

  public handleNewVente() { }


}
