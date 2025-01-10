import { Component, EventEmitter, Output } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { SettingsStore } from '../../stores/SettingsStore';

@Component( {
  selector: 'app-modal-success',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './modal-success.component.html',
  styleUrl: './modal-success.component.scss'
} )
export class ModalSuccessComponent {
  constructor(
    public settings: SettingsStore,
  ) {
  }

  close() {
    this.onClose.emit();
  }

  @Output()
  onClose = new EventEmitter

  toSection( name: string ) {
    let top = ( document.querySelector( 'app-' + name ) as HTMLElement )?.offsetTop - 95;
    window.scrollTo( { top: top, behavior: 'smooth' } );
    this.close();
  }
}
