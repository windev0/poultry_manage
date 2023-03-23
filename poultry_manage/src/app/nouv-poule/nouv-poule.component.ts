import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nouv-poule',
  templateUrl: './nouv-poule.component.html',
  styleUrls: ['./nouv-poule.component.css']
})
export class NouvPouleComponent implements OnInit {

  pouleFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pouleFormGroup = this.fb.group({
      date: this.fb.control(null, [Validators.required, Validators.minLength(10)]),
      race: this.fb.control(null, [Validators.required, Validators.maxLength(10)]),
      sexe: this.fb.control(null, [Validators.required, Validators.maxLength(2)]),
      poids: this.fb.control(null, [Validators.required])
    });
  }

  handleAddSubmit(){
console.log(this.pouleFormGroup.value)
  }
}
