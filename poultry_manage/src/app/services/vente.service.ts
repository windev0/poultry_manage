import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vente } from '../models/vente.model';


enum Produit {
  oeuf = 'oeuf',
  poule = 'poule'
}
@Injectable({
  providedIn: 'root'
})
export class VenteService {

  ventes!: Vente[];

  constructor() {
    this.ventes = [
      {
        id: 1, produit: Produit.oeuf, prix_U: 400, quantite: 4, remise: 0.5, date: '15/15/2003',
        client: {
          id: 1,
          nom: 'AWOUNO',
          prenom: 'Kossi winner',
          email: 'kossiwinnerawouno@gmail.com',
          sexe: 'Masculin',
          adresse: 'Klémé Agokpanou'
        }
      },
      {
        id: 2, produit: Produit.oeuf, prix_U: 400, quantite: 4, remise: 0.5, date: '15/15/2003',
        client: {
          id: 3,
          nom: 'AWOUNO',
          prenom: 'Kossi winner',
          email: 'kossiwinnerawouno@gmail.com',
          sexe: 'Masculin',
          adresse: 'Klémé Agokpanou'
        }
      },
      {
        id: 4, produit: Produit.oeuf, prix_U: 400, quantite: 4, remise: 0.5, date: '15/15/2003',
        client: {
          id: 1,
          nom: 'AWOUNO',
          prenom: 'Kossi winner',
          email: 'kossiwinnerawouno@gmail.com',
          sexe: 'Masculin',
          adresse: 'Klémé Agokpanou'
        }
      },
      {
        id: 5, produit: Produit.oeuf, prix_U: 400, quantite: 4, remise: 0.5, date: '15/15/2003',
        client: {
          id: 1,
          nom: 'AWOUNO',
          prenom: 'Kossi winner',
          email: 'kossiwinnerawouno@gmail.com',
          sexe: 'Masculin',
          adresse: 'Klémé Agokpanou'
        }
      },
      {
        id: 16, produit: Produit.oeuf, prix_U: 400, quantite: 4, remise: 0.5, date: '15/15/2003',
        client: {
          id: 1,
          nom: 'AWOUNO',
          prenom: 'Kossi winner',
          email: 'kossiwinnerawouno@gmail.com',
          sexe: 'Masculin',
          adresse: 'Klémé Agokpanou'
        }
      }
    ]
  }

  public deleteVente(id: number): Observable<boolean> {
    this.ventes = this.ventes.filter(v => v.id != id)
    return of(true)
  }

  public getAllVentes(): Observable<Array<Vente>> {
    return of(this.ventes);
  }
}
