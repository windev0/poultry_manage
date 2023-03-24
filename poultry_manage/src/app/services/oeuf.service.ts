import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import { Oeuf } from '../models/oeuf.model';

enum Qualite {
  'bon' = 'bon',
  'mauvais' = 'mauvais'
}
@Injectable({
  providedIn: 'root'
})
export class OeufService {

  private oeufs!: Array<Oeuf>;
  constructor() {
    this.oeufs = [
      { id: 1, date: '12/01/2022', qualite: Qualite.bon },
      { id: 2, date: '12/01/2022', qualite: Qualite.bon },
      { id: 3, date: '12/01/2022', qualite: Qualite.bon },
      { id: 4, date: '12/01/2022', qualite: Qualite.mauvais },
      { id: 5, date: '12/01/2022', qualite: Qualite.bon },
      { id: 6, date: '12/01/2022', qualite: Qualite.mauvais },
      { id: 7, date: '12/01/2022', qualite: Qualite.mauvais },
      { id: 8, date: '12/01/2022', qualite: Qualite.bon },
      { id: 9, date: '12/01/2022', qualite: Qualite.mauvais },
      { id: 10, date: '12/01/2022', qualite: Qualite.mauvais },
      { id: 11, date: '12/01/2022', qualite: Qualite.bon },
      { id: 12, date: '12/01/2022', qualite: Qualite.mauvais },
      { id: 13, date: '12/01/2022', qualite: Qualite.bon },
    ]
  }

  public getAllOeufs(): Observable<Array<Oeuf>> {
    return of(this.oeufs);
  }

  public deleteOeuf(id: number): Observable<boolean> {
    this.oeufs = this.oeufs.filter(p => p.id != id)
    return of(true)
  }

  public SetEnVente(id: number): Observable<true> {
    let oeuf = this.oeufs.find(o => o.id == id);

    if (oeuf != undefined && oeuf.qualite == Qualite.bon) {
      oeuf.qualite = Qualite.mauvais;
      return of(true)
    } else if (oeuf != undefined && oeuf.qualite == Qualite.mauvais) {
      oeuf.qualite = Qualite.bon;
      return of(true)
    }
    else {
      return throwError(() => new Error("Poule non trouvée"))
    }
  }

  public getOeuf(id: number): Observable<Oeuf> {
    let oeuf = this.oeufs.find(o => o.id == id)
    if (oeuf != undefined) { return of(oeuf); } else {
      return throwError(() => new Error('Oeuf non trouvé'))
    }
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

  public updateOeuf(oeuf: Oeuf): Observable<Oeuf> {
    this.oeufs = this.oeufs.map(o => (o.id == oeuf.id )? oeuf : o)
    return of(oeuf)
  }
}
