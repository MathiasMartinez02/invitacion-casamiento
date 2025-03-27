import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DespedidaComponent } from './components/despedida/despedida.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { CuandoComponent } from './components/cuando/cuando.component';
import { DondeComponent } from './components/donde/donde.component';
import { CuentaRegresivaComponent } from './components/cuenta-regresiva/cuenta-regresiva.component';
import { DresscodeComponent } from './components/dresscode/dresscode.component';
import { FotoComponent } from './components/foto/foto.component';
import { IntinerarioComponent } from './components/intinerario/intinerario.component';
import { ListaRegalosComponent } from './components/lista-regalos/lista-regalos.component';
import { VersiculoLemaComponent } from './components/versiculo-lema/versiculo-lema.component';
import { FadeInDirective } from './directives/fade-in.directive';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  imports: [DespedidaComponent, BienvenidaComponent, ConfirmacionComponent, CuandoComponent, DondeComponent, ConfirmacionComponent, DresscodeComponent, FotoComponent, IntinerarioComponent, ListaRegalosComponent, VersiculoLemaComponent, FadeInDirective, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'invitacion-casamiento';

  ModalState: boolean = false;

  abrirModal(state:boolean) {
    this.ModalState = state;
    document.body.classList.add('overflow-hidden'); 
  }


}
