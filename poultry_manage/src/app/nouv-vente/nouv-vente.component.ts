import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client, Vente } from '../models/vente.model';
import { VenteService } from '../services/vente.service';

@Component({
  selector: 'app-nouv-vente',
  templateUrl: './nouv-vente.component.html',
  styleUrls: ['./nouv-vente.component.css']
})
export class NouvVenteComponent implements OnInit {

  venteFormGroup!: FormGroup;
  client!: Client;
  idClient! : number;
  id!: number;
  vente!: Vente;

  constructor(private fb: FormBuilder, public venteService: VenteService) { }

  ngOnInit(): void {
    this.venteFormGroup = this.fb.group({
      produit: this.fb.control(null, [Validators.required]),
      prix_U: this.fb.control(null, [Validators.required]),
      quantite: this.fb.control(null, [Validators.required]),
      remise: this.fb.control(null, [Validators.required, Validators.min(0)]),
      date: this.fb.control(null, [Validators.required, Validators.minLength(10)]),
      nom: this.fb.control("", [Validators.required]),
      prenom: this.fb.control("", [Validators.required]),
      sexe: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [Validators.required]),
      adresse: this.fb.control("", [Validators.required])
    });
    this.id = 1;
    this.idClient = 7;
  }

  public handleAddSubmit() {
    this.client.id = this.idClient;
    this.client.nom = this.venteFormGroup.value['nom'];
    this.client.prenom = this.venteFormGroup.value['prenom'];
    this.client.email = this.venteFormGroup.value['email'];
    this.client.sexe = this.venteFormGroup.value['sexe'];
    this.client.adresse = this.venteFormGroup.value['adresse'];
    this.vente.id = this.id;
    this.vente.client = this.client;
    this.venteService.addNewVente(this.vente).subscribe({
      next: (value) => {
        alert('Nouvelle vente ajoutée avec succès!');
        this.venteFormGroup.reset();
      }, error: (err) => {
        alert(err)
      }
    })
  }


}
