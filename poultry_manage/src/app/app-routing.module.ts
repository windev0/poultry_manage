import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PouleComponent } from './poule/poule.component';

const routes: Routes = [
  {path : "login", component: LoginComponent},
  {path : "accueil", component: AppComponent},
  {path : "poule", component: PouleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
