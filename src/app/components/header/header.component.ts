import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { isMobile } from '../../utils/utils';

@Component( {
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
} )
export class HeaderComponent {

  isMobile = isMobile;

  toSection( name: string ) {
    let top = ( document.querySelector( 'app-' + name ) as HTMLElement )?.offsetTop - 95;
    window.scrollTo( { top: top, behavior: 'smooth' } );
  }

}
