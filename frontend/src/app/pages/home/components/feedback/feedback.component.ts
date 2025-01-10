import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule, CarouselPageEvent } from "primeng/carousel";
import { ButtonComponent } from '../../../../components/button/button.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { isMobile } from '../../../../utils/utils';
import { SettingsStore } from '../../../../stores/SettingsStore';

@Component( {
  selector: 'app-feedback',
  standalone: true,
  imports: [ CarouselModule, ButtonComponent, NgIf, AsyncPipe ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
  encapsulation: ViewEncapsulation.None,
} )
export class FeedbackComponent implements AfterViewChecked {
  constructor(
    public settings: SettingsStore,
  ) {
    settings.projects.subscribe( ( p ) => {
      this.itemsCount = p?.length || 0;
    } )
  }

  itemsCount = 0;

  isMobile = isMobile;

  page = 0;

  onPage( event: CarouselPageEvent ) {
    // this.page = event.page || 0;
  };

  next() {
    this.page = Math.min( this.page + 1, this.itemsCount - 1 );
  };

  prev() {
    this.page = Math.max( this.page - 1, 0 );
  };

  ngAfterViewChecked(): void {
    if ( !isMobile ) {
      const container = document.querySelector( '.container' ) as HTMLDivElement;
      const viewport = document.querySelector( 'app-feedback .p-carousel-viewport' ) as HTMLDivElement;
      const itemList = document.querySelector( 'app-feedback .p-carousel-item-list' ) as HTMLDivElement;
      if ( container && viewport ) {
        const p = ( window.innerWidth - container.clientWidth ) / 2;
        viewport.style.paddingLeft = `${ p }px`;
        viewport.style.paddingRight = `${ p }px`;
        viewport.style.marginLeft = `-${ p }px`;
        // viewport.style.paddingRight = `${ p }px`;
      }
    }
  };
}
