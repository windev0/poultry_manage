import { Injectable } from '@angular/core';
import { ValidationErrors, Validators } from '@angular/forms';
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

  public getErrorMessage(champ: string, error: ValidationErrors) {
    if (error['required']) {
      return champ + " est obligatoire ! ";
    } else if (error['maxlength']) {
      return champ + " doit contenir au maximum " + error['maxlength']['requiredLength'] + " caractères!";
    } else if (error['minlength']) {
      return champ + " doit contenir au minimum " + error['minlength']['requiredLength'] + " caractères!";
    } else { return ""; }
  }

  public addNewVente(vente: Vente): Observable<Vente> {
    this.ventes.push(vente);
    return of(vente)
  }
}
