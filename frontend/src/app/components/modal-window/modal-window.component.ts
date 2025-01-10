import { Component, ElementRef, ViewChild } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ModalStore } from '../../services/ModalStore';
import { AppClient } from '../../services/AppClient';
import { ModalSuccessComponent } from '../modal-success/modal-success.component';

@Component( {
  selector: 'app-modal-window',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    ModalSuccessComponent
  ],
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.scss'
} )
export class ModalWindowComponent {
  constructor(
    public modal: ModalStore,
    public http: AppClient,
  ) {
  }

  modalSuccess: boolean = false;
  loading = false;
  errors: any = {};

  @ViewChild( "form", { read: ElementRef } )
  form?: ElementRef = undefined;

  close() {
    this.modal.hide();
  }

  open() {
    let object: any = {};
    new FormData( this.form?.nativeElement ).forEach( function ( value, key ) {
      object[ key ] = value;
    } );
    this.loading = true;
    this.http.post( '/form-request', object )
      .subscribe( {
        next: ( r ) => {
          this.loading = false;
          this.close();
          this.modalSuccess = true;
        },
        error: ( e ) => {
          this.errors = e?.error?.errors || {};
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      } )
  }

}
