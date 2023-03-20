import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPouleComponent } from './ajouter-poule.component';

describe('AjouterPouleComponent', () => {
  let component: AjouterPouleComponent;
  let fixture: ComponentFixture<AjouterPouleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPouleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
