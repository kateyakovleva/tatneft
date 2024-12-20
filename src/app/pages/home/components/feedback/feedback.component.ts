import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule, CarouselPageEvent } from "primeng/carousel";
import { ButtonComponent } from '../../../../components/button/button.component';
import { NgIf } from '@angular/common';
import { isMobile } from '../../../../utils/utils';

@Component( {
  selector: 'app-feedback',
  standalone: true,
  imports: [ CarouselModule, ButtonComponent, NgIf ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
  encapsulation: ViewEncapsulation.None,
} )
export class FeedbackComponent implements AfterViewChecked {

  items = [
    {
      id: 1,
      name: 'Айрапетова Элина',
      text: 'Добрые дела - это хорошие поступки, которые совершают люди.\n' +
        '            Они приносят пользу другим людям. Добрые дела делаются просто так и не нуждаются в благодарности.\n' +
        '            Добрые поступки и забота.',
      counter: '234'
    },
    {
      id: 2,
      name: 'Гиязов Марат',
      text: 'То, что идет от сердца к сердцу.\n' +
        '            Желание отдавать добро и не ждать ничего взамен. Когда ты делаешь что-то значимое для другого человека, и \n' +
        'сердце твое наполняется радостью.',
      counter: '54'
    },
    {
      id: 3,
      name: 'Соколовский Иван',
      text: 'Это может каждый.\n' +
        '            Раз в неделю, раз в месяц или даже раз в год - это всегда останется добрым делом.\n' +
        '            А любое доброе дело всегда находит отклик среди неравнодушных людей.',
      counter: '101'
    },
    {
      id: 4,
      name: 'Смирнов Павел',
      text: 'Даже самое малое доброе дело может стать огромным делом в жизни человека.\n' +
        '            Сделать что-то полезное просто так. Подать пример другим.\n' +
        '            Заботиться о себе, своей семье, своем городе, своей стране.',
      counter: '567'
    },
  ]

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
  }
}
