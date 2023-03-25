import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { OeufService } from '../services/oeuf.service';

@Component({
  selector: 'app-nouv-oeuf',
  templateUrl: './nouv-oeuf.component.html',
  styleUrls: ['./nouv-oeuf.component.css']
})
export class NouvOeufComponent implements OnInit {

  oeufFormGroup!: FormGroup;

  constructor(public oeufService: OeufService, private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.oeufFormGroup = this.fb.group({
      date: this.fb.control(null, [Validators.required, Validators.minLength(10)]),
      qualite : this.fb.control(null, [Validators.required])
    })
  }

  handleAddSubmit() {
    this.oeufService.addNewOeuf(this.oeufFormGroup.value).subscribe({
      next: (value) => {
        alert('Oeuf ajouté avec succès');
        this.route.navigateByUrl("oeuf");
      }, error: (err) => {
        console.log(err)
      }
    })
  }

}
