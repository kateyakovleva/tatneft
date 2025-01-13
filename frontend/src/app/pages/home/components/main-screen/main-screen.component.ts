import { Component } from '@angular/core';
import { SettingsStore } from '../../../../stores/SettingsStore';
import { NgForOf } from '@angular/common';
import {ModalStore} from '../../../../services/ModalStore';

@Component( {
  selector: 'app-main-screen',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.scss'
} )
export class MainScreenComponent {
  constructor(
    private settings: SettingsStore,
    private modal: ModalStore
  ) {
    settings.content.subscribe( ( c ) => {
      let n = String( c?.counter || '0' );
      n = n.padStart( 3, '0' );
      this.numbers = n.split( '' )
    } )
  }

  numbers: string[] = [];

  openModal() {
    this.modal.show();
  }
}
