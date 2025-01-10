import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule, MARKED_OPTIONS, provideMarkdown } from "ngx-markdown";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalWindowComponent } from "./components/modal-window/modal-window.component";

@NgModule( {
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot( {
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true,
          breaks: true
        },
      }
    } ),
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ModalWindowComponent,
  ],
  providers: [
    provideMarkdown()
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
