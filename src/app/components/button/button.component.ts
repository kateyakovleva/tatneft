import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {ModalWindowComponent} from '../modal-window/modal-window.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgIf,
    ModalWindowComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  showModal: boolean = false;

  openModal() {
    this.showModal = !this.showModal;
  }

}
