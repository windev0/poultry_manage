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
import { NouvVenteComponent } from './nouv-vente/nouv-vente.component';
import { EditVenteComponent } from './edit-vente/edit-vente.component';
import { NouvDepenseComponent } from './nouv-depense/nouv-depense.component';
import { DepensesComponent } from './depenses/depenses.component';
import { EditDepenseComponent } from './edit-depense/edit-depense.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "accueil", component: AppComponent },
  { path: "poule", component: PouleComponent },
  { path: "oeuf", component: OeufComponent },
  { path: "vente", component: VenteComponent },
  { path: "depense", component: DepensesComponent },
  { path: "rapport", component: RapportComponent },
  { path: "ajouterPoule", component: NouvPouleComponent },
  { path: "editPoule/:id", component: EditPouleComponent },
  { path: "editOeuf/:id", component: EditOeufComponent },
  { path: "editDepense/:id", component: EditDepenseComponent },
  { path: "editVente/:id", component: EditVenteComponent },
  { path: "ajouterOeuf", component: NouvOeufComponent },
  { path: "ajouterVente", component: NouvVenteComponent },
  { path: "ajouterDepense", component: NouvDepenseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
