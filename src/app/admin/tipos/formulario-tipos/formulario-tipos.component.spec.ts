import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTiposComponent } from './formulario-tipos.component';

describe('FormularioTiposComponent', () => {
  let component: FormularioTiposComponent;
  let fixture: ComponentFixture<FormularioTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTiposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
