import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';
import { Carousel, CarouselPageEvent } from 'primeng/carousel';
import { PrimeTemplate } from 'primeng/api';
import { DropdownComponent } from '../../../../components/dropdown/dropdown.component';
import { isMobile } from '../../../../utils/utils';
import { NgIf } from '@angular/common';

@Component( {
  selector: 'app-tatneft-projects',
  standalone: true,
  imports: [
    ButtonComponent,
    Carousel,
    PrimeTemplate,
    DropdownComponent,
    NgIf
  ],
  templateUrl: './tatneft-projects.component.html',
  styleUrl: './tatneft-projects.component.scss',
  encapsulation: ViewEncapsulation.None,
} )
export class TatneftProjectsComponent implements AfterViewChecked {

  visible = true;

  isVisible() {
    return this.visible === false;
  }

  items = [
    {
      id: 1,
      name: 'Озеленение прибрежной зоны «Камское Устье»',
      btn1: 'экология',
      btn2: 'молодежь',
      text: 'Добрые дела - это хорошие поступки, которые совершают люди.\n' +
        '            Они приносят пользу другим людям. Добрые дела делаются просто так и не нуждаются в благодарности.\n' +
        '            Добрые поступки и забота.',
    },
    {
      id: 2,
      name: 'Очищение водоёма в парке у озера «Молодёжный»',
      btn1: 'экология',
      btn2: 'молодежь',
      text: 'То, что идет от сердца к сердцу.\n' +
        '            Желание отдавать добро и не ждать ничего взамен. Когда ты делаешь что-то значимое для другого человека, и \n' +
        'сердце твое наполняется радостью.',
    },
    {
      id: 3,
      name: 'Благоустройство детской площадки',
      btn1: 'благотворительность',
      btn2: 'молодежь',
      text: 'Это может каждый.\n' +
        '            Раз в неделю, раз в месяц или даже раз в год - это всегда останется добрым делом.\n' +
        '            А любое доброе дело всегда находит отклик среди неравнодушных людей.',
    },
    {
      id: 4,
      name: 'Выпуск мальков осётра в реку Волга',
      btn1: 'благотворительность',
      btn2: 'молодежь',
      text: 'Даже самое малое доброе дело может стать огромным делом в жизни человека.\n' +
        '            Сделать что-то полезное просто так. Подать пример другим.\n' +
        '            Заботиться о себе, своей семье, своем городе, своей стране.',
    },
    {
      id: 5,
      name: 'Озеленение прибрежной зоны «Камское Устье»',
      btn1: 'экология',
      btn2: 'молодежь',
      text: 'Добрые дела - это хорошие поступки, которые совершают люди.\n' +
        '            Они приносят пользу другим людям. Добрые дела делаются просто так и не нуждаются в благодарности.\n' +
        '            Добрые поступки и забота.',
    },
    {
      id: 6,
      name: 'Очищение водоёма в парке у озера «Молодёжный»',
      btn1: 'экология',
      btn2: 'молодежь',
      text: 'То, что идет от сердца к сердцу.\n' +
        '            Желание отдавать добро и не ждать ничего взамен. Когда ты делаешь что-то значимое для другого человека, и \n' +
        'сердце твое наполняется радостью.',
    },
    {
      id: 7,
      name: 'Благоустройство детской площадки',
      btn1: 'благотворительность',
      btn2: 'молодежь',
      text: 'Это может каждый.\n' +
        '            Раз в неделю, раз в месяц или даже раз в год - это всегда останется добрым делом.\n' +
        '            А любое доброе дело всегда находит отклик среди неравнодушных людей.',
    },
    {
      id: 8,
      name: 'Выпуск мальков осётра в реку Волга',
      btn1: 'благотворительность',
      btn2: 'молодежь',
      text: 'Даже самое малое доброе дело может стать огромным делом в жизни человека.\n' +
        '            Сделать что-то полезное просто так. Подать пример другим.\n' +
        '            Заботиться о себе, своей семье, своем городе, своей стране.',
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
