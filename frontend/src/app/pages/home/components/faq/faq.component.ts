import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FaqItemComponent } from '../../../../components/faq/faq-item.component';
import { SettingsStore } from '../../../../stores/SettingsStore';
import { IFaq } from '../../../../types/settings';

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
  constructor(
    public settings: SettingsStore
  ) {
    settings.faqs.subscribe( f => this.faqs = f || [] )
  }

  protected faqs: IFaq[] = [];
}
