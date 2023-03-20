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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PouleComponent,
    OeufComponent,
    VenteComponent,
    RapportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
