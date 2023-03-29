import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Depense, PageDepense } from '../models/depenses';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  depenses!: Depense[];
  depId: number = 1;


  constructor() {
    this.depenses = [
      { id: 1, libelle: 'achat de materiel', montant: 4000, date: '12/12/2022' },
      { id: 2, libelle: 'achat de produits', montant: 4000, date: '12/12/2022' },
      { id: 3, libelle: 'achat de materiel', montant: 4000, date: '12/12/2022' },
      { id: 4, libelle: 'achat de materiel', montant: 4000, date: '12/12/2022' },
      { id: 5, libelle: 'achat de materiel', montant: 4000, date: '12/12/2022' },
      { id: 6, libelle: 'achat de materiel', montant: 4000, date: '12/12/2022' },
      { id: 7, libelle: 'vaccination des poules', montant: 15000, date: '22/01/2023' },
      { id: 8, libelle: 'achat de materiel', montant: 4000, date: '12/12/2022' },
      { id: 9, libelle: 'achat de materiel', montant: 4000, date: '12/12/2022' },
      { id: 10, libelle: 'achat de materiel', montant: 4000, date: '12/12/2022' },
    ];
  }

  public getAllDepenses(): Observable<Depense[]> {
    return of(this.depenses);
  }

  public getErrorMessage(champ: string, error: ValidationErrors) {
    if (error['required']) {
      return champ + " est obligatoire";
    } else if (error['maxlength']) {
      return champ + " doit contenir au maximum " + error['maxlength']['requiredLength'] + " caractères!";
    } else if (error['minlength']) {
      return champ + " doit contenir au minimum " + error['minlength']['requiredLength'] + " caractères!";
    } else { return ""; }
  }

  public addNewDepense(depense: Depense): Observable<boolean> {
    depense.id = this.depId++;
    this.depenses.push(depense);
    return of(true);
  }

  public deleteDepense(id: number): Observable<Depense[]> {
    this.depenses = this.depenses.filter(d => d.id != id);
    return of(this.depenses);
  }

  public searchDepenses(motCle: string): Observable<Depense[]> {
    let depenseTrouvees = this.depenses.filter(d => d.libelle.includes(motCle));
    return of(depenseTrouvees);
  }

  public getPageDepenses(currentPage: number, size: number): Observable<PageDepense> {
    let index = currentPage * size;
    let totalPages = ~~(this.depenses.length / size);

    if (this.depenses.length % size != 0) {
      totalPages++;
    }
    let depenseTotalParPage = this.depenses.slice(index, index+size);
    return of({ currentPage: currentPage, size: size, totalPage: totalPages, depenseTotalParPage: depenseTotalParPage})
  }

}
