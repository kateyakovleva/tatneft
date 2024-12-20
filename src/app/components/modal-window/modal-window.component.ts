import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ModalStore } from '../../services/ModalStore';

@Component( {
  selector: 'app-modal-window',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.scss'
} )
export class ModalWindowComponent {
  constructor(
    public modal: ModalStore,
  ) {
  }

  modalSuccess: boolean = false;

  close() {
    this.modal.hide();
  }

  open() {
    this.modalSuccess = !this.modalSuccess
  }

}
