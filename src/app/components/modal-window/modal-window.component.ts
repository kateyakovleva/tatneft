import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-modal-window',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.scss'
})
export class ModalWindowComponent {

  modalWindow: boolean = true;

  modalSuccess: boolean = false;

  close() {
    this.modalWindow = !this.modalWindow
  }

  open() {
    this.modalSuccess = !this.modalSuccess
  }

}
