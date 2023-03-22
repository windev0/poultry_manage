import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { PagePoule, Poule } from '../models/poule.model';
enum Poids {
  moyen = 'moyen',
  grande = 'grande',
  petite = 'petite'
}

@Injectable({
  providedIn: 'root'
})


export class PouleService {

  private poules!: Array<Poule>;

  constructor() {
    this.poules = [
     
      { id: 3, date: '12/01/2020', race: 'noir', sexe: 'M', poids: Poids.petite },
      { id: 4, date: '12/01/2020', race: 'vert', sexe: 'M', poids: Poids.grande },
      { id: 6, date: '12/01/2020', race: 'blanc', sexe: 'M', poids: Poids.grande },
      { id: 7, date: '12/01/2020', race: 'blanc', sexe: 'M', poids: Poids.petite },
      { id: 8, date: '12/01/2020', race: 'noir', sexe: 'M', poids: Poids.grande },
      { id: 6, date: '12/01/2020', race: 'blanc', sexe: 'M', poids: Poids.grande },
      { id: 8, date: '12/01/2020', race: 'noir', sexe: 'M', poids: Poids.grande },
      { id: 5, date: '12/01/2020', race: 'noir', sexe: 'M', poids: Poids.moyen },
      { id: 7, date: '12/01/2020', race: 'blanc', sexe: 'M', poids: Poids.petite },
      { id: 8, date: '12/01/2020', race: 'noir', sexe: 'M', poids: Poids.grande },
      { id: 5, date: '12/01/2020', race: 'noir', sexe: 'M', poids: Poids.moyen },
      { id: 7, date: '12/01/2020', race: 'blanc', sexe: 'M', poids: Poids.petite },
      { id: 8, date: '12/01/2020', race: 'noir', sexe: 'M', poids: Poids.grande },
      { id: 5, date: '12/01/2020', race: 'noir', sexe: 'M', poids: Poids.moyen },
      { id: 7, date: '12/01/2020', race: 'blanc', sexe: 'M', poids: Poids.petite },
      { id: 8, date: '12/01/2020', race: 'noir', sexe: 'M', poids: Poids.grande },
    ];
  }

  public getAllPoules(): Observable<Array<Poule>> {
    // let rnd = Math.random();
    // if(rnd <0.5)
    //   return throwError(()=>new Error("veullez vérifier votre connexion !"));
    return of(this.poules);
  }

  public getPagePoules(page: number, size: number): Observable<PagePoule> {

    let index = page * size;
    let totalPages = ~~this.poules.length / size;

    if (this.poules.length % size != 0) {
      totalPages++;
    }
    let pagesPoules = this.poules.slice(index, index + size);
    return of({ page: page, size: size, totalPages: totalPages, poules: pagesPoules });
  }

  public deletePoule(id: number): Observable<boolean> {
    this.poules = this.poules.filter(p => p.id != id);
    return of(true);
  }

  public setEnVendre(id: number): Observable<Boolean> {
    let poule = this.poules.find(p => p.id == id);

    if (poule != undefined) {
      poule.poids = Poids.grande;

      return of(true)
    } else {
      return throwError(() => new Error("Poule non trouvée"))
    }
  }

  public searchPoule(motCle: string): Observable<Poule[]> {
    let poulesTrouvees = this.poules.filter(p => p.race.includes(motCle))
    return of(poulesTrouvees)
  }
}
