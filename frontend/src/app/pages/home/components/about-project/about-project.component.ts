import { Component } from '@angular/core';

@Component( {
  selector: 'app-about-project',
  standalone: true,
  imports: [],
  templateUrl: './about-project.component.html',
  styleUrl: './about-project.component.scss'
} )
export class AboutProjectComponent {
  about = {
    text1: '«75 лет создаём добро» — масштабный проект Татнефть, посвящённый юбилею Компании. Он объединяет тех, кто ежедневно совершает добрые дела, большие и малые, меняя мир к лучшему.',
    text2: 'Присоединяйтесь к проекту, станьте частью большого движения — давайте вместе развивать регион!'
  }
}
