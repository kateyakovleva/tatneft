import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../components/button/button.component';

@Component({
  selector: 'app-share-good-things',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './share-good-things.component.html',
  styleUrl: './share-good-things.component.scss'
})
export class ShareGoodThingsComponent {

}
