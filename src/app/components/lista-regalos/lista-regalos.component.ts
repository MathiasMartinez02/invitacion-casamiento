import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
  selector: 'app-lista-regalos',
  imports: [FormComponent],
  templateUrl: './lista-regalos.component.html',
  styleUrl: './lista-regalos.component.css'
})
export class ListaRegalosComponent {
  mostrarLunaDeMiel = false;

  abrirModal(): void {
    this.mostrarLunaDeMiel = true;
  }

  cerrarModal(): void {
    this.mostrarLunaDeMiel = false;
  }
}
