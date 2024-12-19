import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-modal-success',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './modal-success.component.html',
  styleUrl: './modal-success.component.scss'
})
export class ModalSuccessComponent {

  modalSuccess = true;

  close() {
    this.modalSuccess = !this.modalSuccess;
  }

}
