import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreFortunellaComponent } from './sobre-fortunella.component';

describe('SobreFortunellaComponent', () => {
  let component: SobreFortunellaComponent;
  let fixture: ComponentFixture<SobreFortunellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreFortunellaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreFortunellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
