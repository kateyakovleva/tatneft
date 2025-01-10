import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import { faqs } from '../../../../data/faq';
import { FaqItemComponent } from '../../../../components/faq/faq-item.component';

@Component( {
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgForOf,
    FaqItemComponent,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
} )
export class FAQComponent {


  protected readonly faqs = faqs;
}
