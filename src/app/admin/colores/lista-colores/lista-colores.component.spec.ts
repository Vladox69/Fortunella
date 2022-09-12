import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColoresComponent } from './lista-colores.component';

describe('ListaColoresComponent', () => {
  let component: ListaColoresComponent;
  let fixture: ComponentFixture<ListaColoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaColoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
