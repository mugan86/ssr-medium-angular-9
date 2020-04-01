import { Meta, Title } from '@angular/platform-browser';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('SSR - Anartz Mugika Ledo');
    this.meta.addTag(
      {
        name: 'page.info',
        content: 'Home page'
      }
    );
  }

  ngOnDestroy(): void {
    this.meta.removeTag('name=\'page.info\'');
  }

}
