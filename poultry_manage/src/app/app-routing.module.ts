import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditOeufComponent } from './edit-oeuf/edit-oeuf.component';
import { EditPouleComponent } from './edit-poule/edit-poule.component';
import { LoginComponent } from './login/login.component';
import { NouvPouleComponent } from './nouv-poule/nouv-poule.component';
import { OeufComponent } from './oeuf/oeuf.component';
import { PouleComponent } from './poule/poule.component';
import { RapportComponent } from './rapport/rapport.component';
import { NouvOeufComponent } from './nouv-oeuf/nouv-oeuf.component';
import { VenteComponent } from './vente/vente.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "accueil", component: AppComponent },
  { path: "poule", component: PouleComponent },
  { path: "oeuf", component: OeufComponent },
  { path: "vente", component: VenteComponent },
  { path: "rapport", component: RapportComponent },
  { path: "ajouterPoule", component: NouvPouleComponent },
  { path: "editPoule/:id", component: EditPouleComponent },
  { path: "editOeuf/:id", component: EditOeufComponent },
  { path: "ajouterOeuf", component: NouvOeufComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
