import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-confirmacion',
  imports: [NgIf, FormComponent],
  templateUrl: './confirmacion.component.html',
  styleUrl: './confirmacion.component.css'
})
export class ConfirmacionComponent {
  isModalOpen = false;
  
  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
    
    // Prevenir scroll del body cuando el modal está abierto
    if (this.isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}