import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class ModalStore {
  state = new BehaviorSubject( false );

  show() {
    this.state.next( true );
  }

  hide() {
    this.state.next( false );
  }

  toggle() {
    this.state.next( !this.state.getValue() );
  }
}
