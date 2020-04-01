import { HeroesService } from './../../@services/heroes.service';
import { Hero } from './../../@interfaces/heroe.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[] = [];

  constructor( private heroesService: HeroesService,
               private meta: Meta, private title: Title) {
      this.title.setTitle('SSR - Anartz Mugika Ledo');
      this.meta.addTag(
        {
          name: 'page.info',
          content: 'Heroes page'
        }
      );
    }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  showLog(index: number) {
    console.log(`Select ${index} element`);
  }

  ngOnDestroy(): void {
    this.meta.removeTag('name=\'page.info\'');
  }

}
