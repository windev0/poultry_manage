import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselModule } from 'ngx-bootstrap/carousel';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PouleComponent } from './poule/poule.component';
import { OeufComponent } from './oeuf/oeuf.component';
import { VenteComponent } from './vente/vente.component';
import { RapportComponent } from './rapport/rapport.component';
import { AjouterVenteComponent } from './ajouter-vente/ajouter-vente.component';
import { AjouterOeufComponent } from './ajouter-oeuf/ajouter-oeuf.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NouvPouleComponent } from './nouv-poule/nouv-poule.component';
import { EditPouleComponent } from './edit-poule/edit-poule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PouleComponent,
    OeufComponent,
    VenteComponent,
    RapportComponent,
    AjouterVenteComponent,
    AjouterOeufComponent,
    NouvPouleComponent,
    EditPouleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
