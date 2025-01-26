import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';

@Component( {
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
} )
export class AppComponent implements AfterViewInit {
  title = 'Татнефть';

  ngAfterViewInit(): void {
    const w = 375;
    const width =  typeof window !== "undefined" ? window.innerWidth: 375;
    if(typeof document !== "undefined" && width < 1000){
      document.querySelector('[name="viewport"]')?.setAttribute('content', `width=${w},initial-scale=${width / w},user-scalable=no`);
    }

  }


}
