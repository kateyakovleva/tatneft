import { Component } from '@angular/core';
import {MainScreenComponent} from '../components/main-screen/main-screen.component';
import {FeedbackComponent} from '../components/feedback/feedback.component';
import {AboutProjectComponent} from '../components/about-project/about-project.component';
import {BannerComponent} from '../components/banner/banner.component';
import {TatneftProjectsComponent} from '../components/tatneft-projects/tatneft-projects.component';
import {CreateProjectComponent} from '../components/create-project/create-project.component';
import {FAQComponent} from '../components/faq/faq.component';
import {ShareGoodThingsComponent} from '../components/share-good-things/share-good-things.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainScreenComponent,
    FeedbackComponent,
    AboutProjectComponent,
    BannerComponent,
    TatneftProjectsComponent,
    CreateProjectComponent,
    FAQComponent,
    ShareGoodThingsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
