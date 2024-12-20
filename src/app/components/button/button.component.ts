import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { ModalStore } from '../../services/ModalStore';

@Component( {
  selector: 'app-button',
  standalone: true,
  imports: [
    NgIf,
    ModalWindowComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
} )
export class ButtonComponent {
  constructor(
    private modal: ModalStore,
  ) {
  }

  openModal() {
    this.modal.show();
  }
}
