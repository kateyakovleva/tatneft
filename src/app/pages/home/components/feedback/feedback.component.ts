import { Component } from '@angular/core';
import {CarouselModule, CarouselPageEvent, CarouselResponsiveOptions} from "primeng/carousel";
import {ButtonComponent} from '../../../../components/button/button.component';
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CarouselModule, ButtonComponent],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

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
      id: 1,
      name: 'Гиязов Марат',
      text: 'То, что идет от сердца к сердцу.\n' +
        '            Желание отдавать добро и не ждать ничего взамен. Когда ты делаешь что-то значимое для другого человека, и \n' +
        'сердце твое наполняется радостью.',
      counter: '54'
    },
    {
      id: 1,
      name: 'Соколовский Иван',
      text: 'Это может каждый.\n' +
        '            Раз в неделю, раз в месяц или даже раз в год - это всегда останется добрым делом.\n' +
        '            А любое доброе дело всегда находит отклик среди неравнодушных людей.',
      counter: '101'
    },
    {
      id: 1,
      name: 'Смирнов Павел',
      text: 'Даже самое малое доброе дело может стать огромным делом в жизни человека.\n' +
        '            Сделать что-то полезное просто так. Подать пример другим.\n' +
        '            Заботиться о себе, своей семье, своем городе, своей стране.',
      counter: '567'
    },
  ]

  isMobile = window.innerWidth < 600;

  responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '700px',
      numScroll: 1,
      numVisible: 1
    },
    {
      breakpoint: '1200px',
      numScroll: 1,
      numVisible: 2
    },
    {
      breakpoint: '3000px',
      numScroll: 1,
      numVisible: 3
    }
  ];

  page = 0;

  onPage(event: CarouselPageEvent) {
    // this.page = event.page || 0;
  }

  next() {
    this.page = Math.min(this.page + 1, 1);
  }

  prev() {
    this.page = Math.max(this.page - 1, 0);
  }
}
