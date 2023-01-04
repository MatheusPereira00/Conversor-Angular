import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConversorComponent } from './pagina-conversor.component';

describe('PaginaConversorComponent', () => {
  let component: PaginaConversorComponent;
  let fixture: ComponentFixture<PaginaConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaConversorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
