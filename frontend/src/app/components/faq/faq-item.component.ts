import { Component, Input } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component( {
  selector: 'faq-item',
  standalone: true,
  imports: [
    MarkdownComponent
  ],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss',
  host: {
    class: 'faq-item'
  }
} )
export class FaqItemComponent {
  @Input()
  faq?: { title: string, description: string };

  isOpen = false;

  change( e: Event ) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
