import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toSection(name: string) {
    let top = (document.querySelector('app-' + name) as HTMLElement)?.offsetTop - 95;
    window.scrollTo({top: top, behavior: 'smooth'});
  }

}
