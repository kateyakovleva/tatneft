import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';
import { Carousel, CarouselPageEvent } from 'primeng/carousel';
import { PrimeTemplate } from 'primeng/api';
import { DropdownComponent } from '../../../../components/dropdown/dropdown.component';
import { isMobile } from '../../../../utils/utils';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { SettingsStore } from '../../../../stores/SettingsStore';
import { IProject } from '../../../../types/settings';

@Component( {
  selector: 'app-tatneft-projects',
  standalone: true,
  imports: [
    ButtonComponent,
    Carousel,
    PrimeTemplate,
    DropdownComponent,
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './tatneft-projects.component.html',
  styleUrl: './tatneft-projects.component.scss',
  encapsulation: ViewEncapsulation.None,
} )
export class TatneftProjectsComponent implements AfterViewChecked {
  constructor(
    public settings: SettingsStore,
  ) {
    settings.projects.subscribe( ( p ) => {
      this.items = p || [];
    } )
  }

  items: IProject[] = [];

  isMobile = isMobile;

  page = 0;

  onPage( event: CarouselPageEvent ) {
    // this.page = event.page || 0;
  }

  next() {
    this.page = Math.min( this.page + 1, this.items.length - 1 );
  }

  prev() {
    this.page = Math.max( this.page - 1, 0 );
  }

  ngAfterViewChecked(): void {
    if ( !isMobile ) {
      const container = document.querySelector( '.container' ) as HTMLDivElement;
      const viewport = document.querySelector( 'app-tatneft-projects .p-carousel-viewport' ) as HTMLDivElement;
      const itemList = document.querySelector( 'app-tatneft-projects .p-carousel-item-list' ) as HTMLDivElement;
      if ( container && viewport ) {
        const p = ( window.innerWidth - container.clientWidth ) / 2;
        viewport.style.paddingLeft = `${ p }px`;
        viewport.style.paddingRight = `${ p }px`;
        viewport.style.marginLeft = `-${ p }px`;
        // viewport.style.paddingRight = `${ p }px`;
      }
    }
  }
}
