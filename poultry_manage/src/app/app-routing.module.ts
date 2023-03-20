import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OeufComponent } from './oeuf/oeuf.component';
import { PouleComponent } from './poule/poule.component';
import { RapportComponent } from './rapport/rapport.component';
import { VenteComponent } from './vente/vente.component';

const routes: Routes = [
  {path : "login", component: LoginComponent},
  {path : "accueil", component: AppComponent},
  {path : "poule", component: PouleComponent},
  {path : "oeuf", component: OeufComponent},
  {path : "vente", component: VenteComponent},
  {path : "rapport", component: RapportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
