import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOeufComponent } from './ajouter-oeuf.component';

describe('AjouterOeufComponent', () => {
  let component: AjouterOeufComponent;
  let fixture: ComponentFixture<AjouterOeufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterOeufComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterOeufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
