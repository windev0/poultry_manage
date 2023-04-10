import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { AppUsers } from '../models/users.model';
import { Observable, Unsubscribable, of, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  users!: AppUsers[];
  authenticatedUser!: AppUsers;

  constructor() {
    this.users = [
      { usernamne: 'winner', password: '1234', roles: ["USER"] },
      { usernamne: 'graciano', password: '12345', roles: ["USER, ADMIN"] },
    ]
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

  public login(username: string, password: string): Observable<AppUsers> {
    let appUser = this.users.find(u => u.usernamne == username);
    if (!appUser) { return throwError(() => new Error('Identifiant non reconnu')) }

    if (appUser.password != password) { return throwError(() => new Error('Mot de passe incorrect')) }
    return of(appUser);
  }

  public authenticateUser(appUser: AppUsers): Observable<boolean> {
    this.authenticatedUser = appUser;
    localStorage.setItem("authUser", JSON.stringify({ username: appUser.usernamne, roles: appUser.roles, jwt: "JWT_TOKEN" }));
    return of(true)
  }

  public hasRole(role: string): boolean {
    return this.authenticatedUser.roles.includes(role);
  }

  public isAuthentificated() : boolean{
    return this.authenticatedUser != undefined;
  }
}
