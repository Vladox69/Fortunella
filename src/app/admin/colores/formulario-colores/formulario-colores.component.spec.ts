import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioColoresComponent } from './formulario-colores.component';

describe('FormularioColoresComponent', () => {
  let component: FormularioColoresComponent;
  let fixture: ComponentFixture<FormularioColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioColoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
