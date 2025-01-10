import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { PrimeTemplate } from 'primeng/api';
import { banners } from '../../../../data/banners';
import { isMobile } from '../../../../utils/utils';

@Component( {
  selector: 'app-banner',
  standalone: true,
  imports: [
    Carousel,
    PrimeTemplate
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  encapsulation: ViewEncapsulation.None
} )
export class BannerComponent implements OnInit {
  isMobile = isMobile;

  page = 1;
  history: number[] = [];

  next() {
    this.page = this.random();
  }

  prev() {
    if ( this.history.length ) {
      //@ts-ignore
      this.page = this.history.pop()
    }
  }

  random(): number {
    const max = this.banners.length - 1;
    const min = 0;
    const page = Math.floor( Math.random() * ( max - min + 1 ) ) + min;

    if ( page === this.page ) {
      return this.random();
    }
    this.history.push( this.page );
    return page;
  }

  protected readonly banners = banners;

  ngOnInit(): void {
    setTimeout( () => {
      this.page = 0;
    }, 50 );
  }
}
