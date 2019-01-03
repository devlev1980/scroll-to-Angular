import { HomeComponent } from './home/home.component';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('home') homeComp: ElementRef;

  onGoToHome() {
    const homeComp = document.getElementsByTagName('app-home');
    Array.from(homeComp).forEach((item) => {
      this.scrollingTo(item);
    });

  }
  onGoToAbout() {
    const aboutComp = document.getElementsByTagName('app-about');
    Array.from(aboutComp).forEach((item) => {
      this.scrollingTo(item);
    });
  }
  onGoToContact() {
    const contactComp = document.getElementsByTagName('app-contact');
    Array.from(contactComp).forEach((item) => {
      this.scrollingTo(item);
    });
  }

  scrollingTo(item) {
    const top = item.getBoundingClientRect().top;
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  }
}
