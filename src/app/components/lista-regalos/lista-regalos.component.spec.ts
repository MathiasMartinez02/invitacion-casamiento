import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegalosComponent } from './lista-regalos.component';

describe('ListaRegalosComponent', () => {
  let component: ListaRegalosComponent;
  let fixture: ComponentFixture<ListaRegalosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaRegalosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRegalosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
