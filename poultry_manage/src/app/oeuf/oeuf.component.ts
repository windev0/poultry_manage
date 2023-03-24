import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Oeuf } from '../models/oeuf.model';
import { OeufService } from '../services/oeuf.service';

enum Qualite {
  'bon' = 'bon',
  'mauvais' = 'mauvais'
}
@Component({
  selector: 'app-oeuf',
  templateUrl: './oeuf.component.html',
  styleUrls: ['./oeuf.component.css']
})
export class OeufComponent implements OnInit {

  oeufs!: Array<Oeuf>;
  errorMessage!: String;
  oeufFormGroup!: FormGroup;

  constructor(private oeufService: OeufService, private route: Router) {

  }
  ngOnInit(): void {
    this.handleGetAllOeufs();

  }
  public handleGetAllOeufs() {
    this.oeufService.getAllOeufs().subscribe({
      next: (value) => {
        this.oeufs = value;
      }, error: (err) => {
        this.errorMessage = err;
      }
    })
  }

  public handleSetEnVente(o: Oeuf) {
    this.oeufService.SetEnVente(o.id).subscribe({
      next: (value) => {

      }
    })
  }

  public handleDeleteOeuf(o: Oeuf) {
    let conf = confirm('Etes-vous certain de vouloir supprimer cet oeuf?')
    if (conf == true) {
      this.oeufService.deleteOeuf(o.id).subscribe({
        next: (value) => {
          // let index = this.oeufs.indexOf(o)
          // this.oeufs = this.oeufs.splice(index, 1)
          this.handleGetAllOeufs()
        }, error: (err) => {
          this.errorMessage = err
        }
      })
    }

  }

  public handleEditOeuf(o: Oeuf) {
    this.route.navigateByUrl('editOeuf/' + o.id)
  }

}
