import { Component, ViewEncapsulation } from '@angular/core';
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
export class BannerComponent {
  isMobile = isMobile;

  page = 0;

  next() {
    this.page = Math.min( this.page + 1, this.banners.length - 1 );
  }

  prev() {
    this.page = Math.max( this.page - 1, 0 );
  }

  protected readonly banners = banners;
}
